function showDownloadWarning(event) {
  event.preventDefault(); // stops the link from instantly downloading

  const proceed = confirm(
    "Do not use this to disturb classes or for any commercial uses.\nPlease respect the author's license.\nPersonal use only!"
  );

  if (proceed) {
    // If user clicks OK, continue to the download
    window.location.href = event.target.href;
  }
}
function attachSeek(playerId, seekId) {
  const player = document.getElementById(playerId);
  const seek = document.getElementById(seekId);

  player.addEventListener('timeupdate', () => {
    if (!player.duration) return;
    seek.value = (player.currentTime / player.duration) * 100;
    updateSeekFill(seek);
  });

  seek.addEventListener('input', () => {
    if (!player.duration) return;
    player.currentTime = (seek.value / 100) * player.duration;
    updateSeekFill(seek);
  });
}
