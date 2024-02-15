window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset; // Get current scroll position
    const totalScrollHeight = document.body.scrollHeight - window.innerHeight; // Total possible scroll distance
    const frameIndex = Math.floor((scrollPosition / totalScrollHeight) * totalFrames); // Calculate frame index based on scroll
    // Update the image or sprite sheet position here
  });
  
  document.querySelector('.hamburger').addEventListener('click', function() {
    const nav = document.querySelector('.navigation ul');
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  });
  