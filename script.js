const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');


playButton.addEventListener('click', () => {
    playText(textInput.value)
})

function playText(text){
    if (speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value || 1
    utterance.addEventListener('end', () => {
        textInput.disabled = false  // so we won't able to edit text while it's playing
    })
    textInput.disabled = true // so we won't able to edit text while it's playing
    speechSynthesis.speak(utterance)
}

function pauseText(){
    if (speechSynthesis.speaking) speechSynthesis.pause()
}