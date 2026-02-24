function showDownloadWarning(event) {
  event.preventDefault(); // stop the auto-download

  const proceed = confirm(
    "Do not use this to disturb classes or for any commercial uses.\nPlease respect the author's license.\nPersonal use only!"
  );

  if (proceed) {
    // Continue the download manually
    window.location.href = event.target.href;
  }
}
