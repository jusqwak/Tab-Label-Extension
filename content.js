// Content Script for Tab Labeler
// Changes the actual browser tab title in the tab bar

console.log('[Tab Labeler] Content script loaded');

let originalTitle = document.title;

// Get the saved label and apply it to the tab title
function applyTabLabel() {
  chrome.runtime.sendMessage({ action: 'getLabel' }, (response) => {
    if (response && response.label) {
      console.log('[Tab Labeler] Applying label:', response.label);
      document.title = response.label;
    } else {
      document.title = originalTitle;
    }
  });
}

// Show rename prompt
function showRenamePrompt() {
  console.log('[Tab Labeler] Showing rename prompt');
  chrome.runtime.sendMessage({ action: 'getLabel' }, (response) => {
    const currentLabel = response && response.label ? response.label : '';
    
    const newLabel = prompt('Enter new tab name:', currentLabel);
    
    if (newLabel !== null) {
      if (newLabel.trim() === '') {
        // Remove label and restore original title
        console.log('[Tab Labeler] Removing label');
        chrome.runtime.sendMessage({ action: 'removeLabel' }, () => {
          document.title = originalTitle;
          console.log('[Tab Labeler] Restored original title:', originalTitle);
        });
      } else {
        // Save new label and update tab title
        const trimmedLabel = newLabel.trim();
        console.log('[Tab Labeler] Saving label:', trimmedLabel);
        chrome.runtime.sendMessage({ action: 'saveLabel', label: trimmedLabel }, () => {
          document.title = trimmedLabel;
          console.log('[Tab Labeler] Tab title changed to:', trimmedLabel);
        });
      }
    }
  });
}

// Store original title
console.log('[Tab Labeler] Original title:', originalTitle);

// Initialize listeners
console.log('[Tab Labeler] Setting up event listeners');

// Keyboard shortcut (Ctrl+Shift+L or Cmd+Shift+L)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyL') {
    console.log('[Tab Labeler] Keyboard shortcut activated');
    e.preventDefault();
    showRenamePrompt();
  }
}, true);

// Apply label on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    applyTabLabel();
  });
} else {
  applyTabLabel();
}

// Listen for storage changes and update tab title
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.tabLabels) {
    console.log('[Tab Labeler] Storage changed, updating tab title');
    applyTabLabel();
  }
});

console.log('[Tab Labeler] Content script fully initialized');