// Notes simples en audio (générées directement)
function playNote(note) {
    const freqMap = {
        C: 261.6,
        D: 293.7,
        E: 329.6,
        F: 349.2,
        G: 392.0,
        A: 440.0,
        B: 493.9
    };

    const freq = freqMap[note];
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
}


// -------- QUIZ --------
let correctAnswer = "";

function newQuestion() {
    const notes = ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"];
    correctAnswer = notes[Math.floor(Math.random() * notes.length)];

    document.getElementById("quiz-question").textContent =
        "Quelle note correspond à : " + correctAnswer + " ?";
    document.getElementById("quiz-result").textContent = "";
}

function checkAnswer() {
    const user = prompt("Écris ta réponse (Do, Ré, Mi…) :");

    if (!user) return;

    if (user.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("quiz-result").textContent = "Bonne réponse !";
    } else {
        document.getElementById("quiz-result").textContent =
            "Raté ! La bonne réponse était : " + correctAnswer;
    }
}
