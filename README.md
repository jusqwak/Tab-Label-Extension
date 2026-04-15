# Tab Labeler - Chrome Extension

Rename your browser tabs directly in the tab bar! Double-click anywhere on a webpage to rename the tab at the top of Chrome.

## Features

✨ **Double-click to rename** - Double-click anywhere on a page to rename the tab  
🏷️ **See changes in tab bar** - The tab name at the top of Chrome updates immediately  
⌨️ **Keyboard shortcut** - Use Ctrl+Shift+L (or Cmd+Shift+L on Mac) to rename  
💾 **Persistent labels** - Your custom tab names are saved and restored when you reopen tabs  
🗑️ **Easy removal** - Leave the prompt empty to restore the original tab name  

## How It Works

When you rename a tab, it actually changes the `document.title` property of the webpage, which updates the tab name visible in the browser's tab bar. The extension stores your custom names so they persist.

## Installation

### For Development/Testing

1. Download or extract these files to a folder:
   - `manifest.json`
   - `background.js`
   - `content.js`

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in the top-right corner)

4. Click **Load unpacked** and select the folder

5. Done! The extension is now active.

## Usage

### Rename a Tab

**Method 1: Double-click (easiest)**
- Double-click anywhere on the webpage
- Type your new tab name (e.g., "Gmail", "Project Alpha", "Notes")
- Press Enter
- Watch the tab name change in the tab bar!

**Method 2: Keyboard Shortcut**
- Press `Ctrl + Shift + L` (Windows/Linux) or `Cmd + Shift + L` (Mac)
- Type your new tab name
- Press Enter

### Remove a Label (Restore Original Name)

1. Double-click on the page or use the keyboard shortcut
2. Delete all the text in the prompt
3. Press Enter
4. The tab will return to its original website name

## Examples

- Rename a Gmail tab to "📧 Email"
- Rename a Spotify tab to "🎵 Music"
- Rename a project folder to "⚡ Current Project"
- Rename a notes page to "📝 Notes"

## Technical Details

- **Document Title** - The extension changes the `document.title`, which updates the browser tab name
- **Persistent Storage** - Custom names are stored locally per tab
- **Auto-restore** - When you navigate back to a tab, your custom name is restored
- **No Limits** - Rename as many tabs as you want
- **Privacy** - All data stays on your device

## Troubleshooting

### Double-click or keyboard shortcut not working?

1. **Check console for errors:**
   - Press F12 to open DevTools
   - Click the Console tab
   - Look for messages starting with `[Tab Labeler]`

2. **Reload the extension:**
   - Go to `chrome://extensions/`
   - Click the refresh icon next to "Tab Labeler"
   - Go back to your webpage and try again

3. **Try the keyboard shortcut first:**
   - Press `Ctrl + Shift + L` (or `Cmd + Shift + L` on Mac)
   - Does the prompt appear?

4. **Try a different website:**
   - Go to google.com or wikipedia.org
   - Some websites might block the events
   - Try double-clicking there

### Tab name doesn't stick after refreshing?

- The tab name only persists while the page is loaded
- When you refresh (F5), the website's original title might reload
- Just rename it again - the custom name is stored in the extension
- Next time you visit that page, your custom name will be restored

### Why did my custom name disappear?

**Normal behavior:**
- If you close the tab and open a new tab to the same URL, your custom name will be restored
- If you refresh the page (F5), the website's original title loads, but your custom name is saved
- Simply rename it again - the name is stored for next time

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

## Keyboard Shortcut

| OS | Shortcut |
|---|---|
| Windows/Linux | `Ctrl + Shift + L` |
| Mac | `Cmd + Shift + L` |

## Future Features

- Multiple rename options (emoji, color-coded, etc.)
- Tab groups with custom names
- Export/import label sets
- Batch rename multiple tabs

## License

Free to use and modify!