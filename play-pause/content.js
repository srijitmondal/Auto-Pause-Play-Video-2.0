document.addEventListener('visibilitychange', function () {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    if (document.hidden) {
      video.pause();
    } else {
      video.play();
    }
  });
});
