# Live Streaming Guide

## How to Enable Live Sermon Streaming

Your website now has the ability to embed YouTube live streams directly on both the Home page and Sermons page.

### Step 1: Get Your YouTube Channel ID

You need your YouTube Channel ID (not your channel handle). Here's how to find it:

**Option 1: Using YouTube Studio**
1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click **Settings** (bottom left)
3. Click **Channel** → **Advanced settings**
4. Copy your **Channel ID**

**Option 2: From Your Channel Page**
1. Go to your channel: https://www.youtube.com/@GospeLlightEritreanChurch
2. Right-click and select "View page source"
3. Press Ctrl+F (or Cmd+F on Mac) and search for "channelId"
4. Copy the ID (it looks like: UC...)

### Step 2: Update the Channel ID in Your Code

Open this file: `src/components/sermons/LiveSermon.jsx`

Find this line:
```javascript
export default function LiveSermon({ channelId = 'UCl4bq_3WtsrvGz7xP6lQOLw' }) {
```

Replace `'UCl4bq_3WtsrvGz7xP6lQOLw'` with your actual channel ID.

### Step 3: Enable Live Streaming

When you want to show the live stream on your website:

**For the Home Page:**
1. Open `src/pages/Home.jsx`
2. Find this line: `const isLiveNow = false;`
3. Change it to: `const isLiveNow = true;`

**For the Sermons Page:**
1. Open `src/pages/Sermons.jsx`
2. Find this line: `const isLiveNow = false;`
3. Change it to: `const isLiveNow = true;`

**Remember:** Set it back to `false` when you're done streaming!

### Step 4: Start Your YouTube Live Stream

1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click **Create** (top right) → **Go Live**
3. Set up your stream and start broadcasting
4. Your website will automatically embed the live stream!

### How It Works

- When `isLiveNow = true`, a "LIVE NOW" section appears with a red pulsing badge
- The embedded player shows your current live stream automatically
- Viewers can watch directly on your website or click "Open in YouTube"
- When you're not live, simply set `isLiveNow = false` to hide the section

### Tips

- Test the live stream before your actual service
- You can schedule streams in advance on YouTube
- Consider adding a "Live Sundays at 10:00 AM" notice on your site
- Make sure to set `isLiveNow = false` after your stream ends

## Troubleshooting

**Stream not showing?**
- Verify your Channel ID is correct
- Make sure you're actually live on YouTube
- Check that `isLiveNow = true` in both files
- Clear your browser cache and refresh

**Need help?**
Contact your web developer or check YouTube's help center for live streaming support.
