// Background Service Worker for Tab Labeler
// Manages tab rename data storage and communication

console.log('[Tab Labeler] Background service worker loaded');

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[Tab Labeler] Message received:', request.action, 'from tab:', sender.tab.id);
  
  if (request.action === 'saveLabel') {
    chrome.storage.local.get('tabLabels', (result) => {
      const labels = result.tabLabels || {};
      labels[sender.tab.id] = request.label;
      chrome.storage.local.set({ tabLabels: labels }, () => {
        console.log('[Tab Labeler] Label saved for tab', sender.tab.id, ':', request.label);
        sendResponse({ success: true });
      });
    });
    return true;
  }
  
  if (request.action === 'getLabel') {
    chrome.storage.local.get('tabLabels', (result) => {
      const labels = result.tabLabels || {};
      const label = labels[sender.tab.id];
      console.log('[Tab Labeler] Retrieved label for tab', sender.tab.id, ':', label);
      sendResponse({ label: label || null });
    });
    return true;
  }
  
  if (request.action === 'removeLabel') {
    chrome.storage.local.get('tabLabels', (result) => {
      const labels = result.tabLabels || {};
      delete labels[sender.tab.id];
      chrome.storage.local.set({ tabLabels: labels }, () => {
        console.log('[Tab Labeler] Label removed for tab', sender.tab.id);
        sendResponse({ success: true });
      });
    });
    return true;
  }
});

// Clean up labels when tabs are closed
chrome.tabs.onRemoved.addListener((tabId) => {
  console.log('[Tab Labeler] Tab removed:', tabId);
  chrome.storage.local.get('tabLabels', (result) => {
    const labels = result.tabLabels || {};
    delete labels[tabId];
    chrome.storage.local.set({ tabLabels: labels }, () => {
      console.log('[Tab Labeler] Cleaned up label for removed tab:', tabId);
    });
  });
});

console.log('[Tab Labeler] Background service worker fully initialized');