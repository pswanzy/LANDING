window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset; // Get current scroll position
    const totalScrollHeight = document.body.scrollHeight - window.innerHeight; // Total possible scroll distance
    const frameIndex = Math.floor((scrollPosition / totalScrollHeight) * totalFrames); // Calculate frame index based on scroll
    // Update the image or sprite sheet position here
  });
  