# How to Get Your YouTube Channel ID

Your YouTube RSS feed integration is almost complete! You just need to add your YouTube Channel ID to the configuration.

## Method 1: From YouTube Studio (Easiest)

1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click on **Settings** (gear icon in the left sidebar)
3. Click on **Channel** → **Advanced settings**
4. Your **Channel ID** will be displayed there - copy it

## Method 2: From Your Channel URL

1. Go to your YouTube channel: https://www.youtube.com/@GospeLlightEritreanChurch
2. Click on any of your videos
3. Right-click on the video → **View page source** (or press Ctrl+U / Cmd+Option+U)
4. Press Ctrl+F / Cmd+F and search for: `"channelId"`
5. Copy the ID that appears after it (it looks like: `UC...` or similar)

## Method 3: Using a Third-Party Tool

Visit this URL and paste your channel URL:
https://commentpicker.com/youtube-channel-id.php

## Once You Have Your Channel ID

Edit the file: `src/config/youtube.js`

Replace this line:
```javascript
channelId: 'YOUR_CHANNEL_ID_HERE',
```

With your actual channel ID:
```javascript
channelId: 'UC1234567890abcdefg',  // Your actual channel ID
```

## That's it!

Once you update the channel ID and save the file, your website will automatically fetch and display the latest sermons from your YouTube channel!

## Need Help?

If you can't find your channel ID, please share it with me and I'll help you configure it.
