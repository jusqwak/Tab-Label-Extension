# Quick Start Guide - Tab Labeler Extension

## Files You Need

```
tab-labeler/
├── manifest.json
├── background.js
├── content.js
├── README.md
└── icons/ (optional)
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

## Installation Steps (2 minutes)

1. **Prepare the folder**
   - Create a new folder called `tab-labeler`
   - Copy `manifest.json`, `background.js`, and `content.js` into this folder
   - (Optional) Create an `icons` folder with the 3 PNG files

2. **Load into Chrome**
   - Open Chrome
   - Go to `chrome://extensions/`
   - Click the **Developer mode** toggle (top right)
   - Click **Load unpacked**
   - Select your `tab-labeler` folder

3. **Done!** ✅
   - The extension is now installed
   - Go to any webpage and double-click to test

## How to Use

### Double-click Method (Easiest)
```
1. Open any webpage
2. Double-click anywhere on the page
3. Type your label (e.g., "Project Alpha", "Email", "Research")
4. Press Enter
```

### Keyboard Shortcut
```
Windows/Linux: Ctrl + Shift + L
Mac: Cmd + Shift + L
```

## Common Tasks

**Change a label:**
→ Double-click again and enter a new name

**Remove a label:**
→ Double-click and press Enter with empty field

**See all my labels:**
→ Open Chrome DevTools (F12) → Application → Storage → Local Storage
→ Look for the `tabLabels` object

## Tips

- Labels appear as a subtle purple bar at the top of labeled tabs
- Labels persist even after closing and reopening Chrome
- Different tabs can have different labels
- Clearing browser data will remove all labels

## Need Help?

If double-click doesn't work:
- Try the keyboard shortcut instead
- Make sure you're clicking on the webpage (not the address bar)
- Refresh the extension: go to `chrome://extensions/` and click the refresh icon

## Uninstall

- Go to `chrome://extensions/`
- Find "Tab Labeler"
- Click the Remove button
