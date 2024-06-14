// variables declaration

const buttons = document.querySelectorAll('.btn');
const audios = ['audios/Applaudissements.wav', 'audios/son.wav', 'audios/sonn.wav', 'audios/sonne.wav', 'audios/sonner.wav', 'audios/sonnera.wav'];


let audioInProgress = null

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        //Stop the sound currently playing if there is one
        if (audioInProgress) {
            audioInProgress.pause();
            audioInProgress.currentTime = 0; //Reset to starting position
        }
        audioInProgress = new Audio(audios[index]);

        audioInProgress.play();
    });
});