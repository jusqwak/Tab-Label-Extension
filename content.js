// Content Script for Tab Labeler - Robust Version
console.log('[Tab Labeler] Content script loaded');

let originalTitle = document.title;
let customLabel = null;
let observer = null;

/**
 * The "Guard" function: Watches the <title> tag and forces 
 * it to stay as the customLabel if the website tries to change it.
 */
function protectTitle() {
  // 1. Disconnect existing observer to avoid infinite loops during update
  if (observer) observer.disconnect();

  // 2. Apply the label immediately
  if (customLabel) {
    document.title = customLabel;
  }

  // 3. Create a new observer to watch for title changes
  observer = new MutationObserver(() => {
    if (customLabel && document.title !== customLabel) {
      document.title = customLabel;
    }
  });

  // 4. Start watching the <title> element specifically
  const titleElement = document.querySelector('title');
  if (titleElement) {
    observer.observe(titleElement, { childList: true });
  }
}

/**
 * Fetches the saved label from background storage
 */
function applyTabLabel() {
  chrome.runtime.sendMessage({ action: 'getLabel' }, (response) => {
    if (response && response.label) {
      console.log('[Tab Labeler] Applying and locking label:', response.label);
      customLabel = response.label;
      protectTitle();
    } else {
      console.log('[Tab Labeler] No label found, releasing title control');
      customLabel = null;
      if (observer) observer.disconnect();
    }
  });
}

/**
 * UI for renaming the tab
 */
function showRenamePrompt() {
  chrome.runtime.sendMessage({ action: 'getLabel' }, (response) => {
    const currentLabel = response && response.label ? response.label : '';
    const newLabel = prompt('Enter new tab name:', currentLabel);
    
    if (newLabel !== null) {
      if (newLabel.trim() === '') {
        // Remove label
        chrome.runtime.sendMessage({ action: 'removeLabel' }, () => {
          customLabel = null;
          if (observer) observer.disconnect();
          document.title = originalTitle;
        });
      } else {
        // Save and Lock label
        const trimmedLabel = newLabel.trim();
        chrome.runtime.sendMessage({ action: 'saveLabel', label: trimmedLabel }, () => {
          customLabel = trimmedLabel;
          protectTitle();
        });
      }
    }
  });
}

// Initialization: Keyboard Listener (Using Capture Phase 'true')
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyL') {
    e.preventDefault();
    e.stopImmediatePropagation(); // Prevents the website from seeing the shortcut
    showRenamePrompt();
  }
}, true); 

// Initial run
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyTabLabel);
} else {
  applyTabLabel();
}

// Sync across tabs if storage changes
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.tabLabels) {
    applyTabLabel();
  }
});
