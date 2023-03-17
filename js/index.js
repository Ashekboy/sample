const audio = document.getElementById('my-audio');
const btn = document.getElementById('play-pause-btn');

btn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    btn.classList.add('playing');
  } else {
    audio.pause();
    btn.classList.remove('playing');
  }
});