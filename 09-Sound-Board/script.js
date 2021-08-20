const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        // the html5 api does not have stop() method so we are using a trick to stop it
        song.pause();
        song.currentTime = 0;
    })
}