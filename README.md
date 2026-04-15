# Tab Labeler - Chrome Extension

A Chrome extension to easily identify and navigate your tab bar

## Features

🏷️ **See changes in tab bar** - The tab name at the top of Chrome updates immediately  
⌨️ **Keyboard shortcut** - Use Ctrl+Shift+L (or Cmd+Shift+L on Mac) to rename  
🗑️ **Easy removal** - Leave the prompt empty to restore the original tab name  

## Installation

### For Development/Testing

1. Download or extract these files to a folder:
   - `manifest.json`
   - `background.js`
   - `content.js`

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in the top-right corner)

4. Click **Load unpacked** and select the folder

5. The extension is now active.

## Usage

### Rename a Tab

**Keyboard Shortcut**
- Press `Ctrl + Shift + L` (Windows/Linux) or `Cmd + Shift + L` (Mac)
- Type your new tab name
- Press Enter

### Remove a Label (Restore Original Name)

1. Use the keyboard shortcut
2. Delete all the text in the prompt
3. Press Enter
4. The tab will return to its original website name

## Troubleshooting

### Keyboard shortcut not working?

1. **Create new tabs**
   - Open a new website or refresh webpage
   - Does not work with tabs open before extension activation

2. **Reload the extension:**
   - Go to `chrome://extensions/`
   - Click the refresh icon next to "Tab Labeler"
   - Go back to your webpage and try again

3. **Try a different website:**
   - Go to google.com or wikipedia.org
   - Some websites might block the events

### Why did my custom name disappear?

**Normal behavior:**
- If you close the tab and open a new tab to the same URL, your custom name will be lost

**If it completely disappeared:**
1. Go to `chrome://extensions/`
2. Click the refresh icon next to Tab Labeler
3. Try renaming again
4. Check your browser's extensions settings to ensure Tab Labeler is enabled

## Privacy & Security

- All data is stored locally on your device
- No information is sent to external servers
- No tracking or analytics
- You can clear this data anytime by clearing Chrome's cache

## License

Free to use and modify!
