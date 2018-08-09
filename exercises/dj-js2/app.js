var play = false;
var track = '/Darude - Sandstorm.mp3'
var song = new Audio(track);

function playme() {
    if(play) {
        song.pause();
        play = false;
    } else {
        song.play()
        play = true;
    }
}