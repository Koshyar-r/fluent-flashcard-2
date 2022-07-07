function ShowFlashcard() {
    document.querySelector(".flashcard").style.display="block"
    document.querySelector(".question-box").style.display="none"
}
setTimeout("ShowFlashcard()", 61000)

const TimeCounter = document.querySelector(".timer .timer-sec")

let TimeValue = 60

function StartTimer(Time) {
    let Counter = setInterval(Timer, 1000)
    function Timer() {
        TimeCounter.textContent = Time
        Time--
        if(Time < 9) {
            let AddZero = TimeCounter.textContent
            TimeCounter.textContent = "0" + AddZero
        }
        if(Time < 0) {
            clearInterval(Counter)
            TimeCounter.textContent = "00"  
        }
    }
}

StartTimer(TimeValue)

const QuestionBtn = document.querySelector(".question-btn")

QuestionBtn.addEventListener("click", ShowFlashcard)

function PlayAudio() {
    document.getElementById("voice").play()
}