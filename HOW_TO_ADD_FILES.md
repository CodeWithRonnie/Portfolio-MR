# How to Add CV and Video to Your Portfolio

## Adding Your CV

1. Rename your CV file to `cv.pdf`
2. Place the file in the `public` folder of your project
3. The "Download CV" button will automatically link to this file

## Adding a Video

1. Upload your video to a video hosting service (recommended: YouTube, Vimeo, or Cloudinary)
2. Get the embed code or direct URL to your video
3. In your project, find where you want to add the video (e.g., in the About or Home section)
4. Add an iframe or video element with the appropriate source

Example for adding a YouTube video:
```jsx
<div className="mt-8 rounded-xl overflow-hidden shadow-xl">
  <iframe 
    width="100%" 
    height="400"
    src="YOUR_YOUTUBE_EMBED_URL" 
    title="Your Video Title"
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
    className="rounded-lg"
  ></iframe>
</div>
```

## Local Video

If you want to host the video directly:

1. Place your video file in the `public/videos` folder (create it if it doesn't exist)
2. Add a video element like this:

```jsx
<video 
  className="w-full max-w-3xl mx-auto rounded-xl shadow-xl" 
  controls
  poster="/path-to-poster-image.jpg"
>
  <source src="/videos/your-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Notes

- For best performance, keep video files under 10MB or use a video hosting service
- Compress your CV to keep the file size small (under 2MB recommended)
- Always test the download and video playback after making changes
