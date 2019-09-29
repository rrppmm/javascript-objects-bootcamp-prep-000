var playlist = {
  'Sophie': 'Immaterial',
  '(Sandy) Alex G': 'Walk Away',
  'Madonna': 'Hung Up'
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playList;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return
}