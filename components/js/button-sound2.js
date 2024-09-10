const hoverSound = new Audio('../images/sound/btnHover.ogg');
const clickSound = new Audio('../images/sound/btnClick.ogg');

hoverSound.volume = 1.0;
clickSound.volume = 1.0;

hoverSound.preload = 'auto';
clickSound.preload = 'auto';

function playSound(sound) {
    if (sound.readyState >= 2) {
        sound.currentTime = 0;
        sound.play().catch(err => console.error('Playback failed:', err));
    }
}


document.querySelectorAll('.sound-button').forEach(element => {
    element.addEventListener('mouseover', () => playSound(hoverSound)); 
    element.addEventListener('click', () => playSound(clickSound));
});