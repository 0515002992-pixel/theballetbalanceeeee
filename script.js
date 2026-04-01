// VIEW COUNTER
let views = localStorage.getItem("views") || 0;
views++;
localStorage.setItem("views", views);
document.getElementById("views").innerText = "Views: " + views;

// PODCAST
function togglePodcast() {
  document.getElementById("podcast").classList.toggle("hidden");
}

// QUOTES
const quotes = [
  { text: "Dance for yourself.", author: "Baryshnikov" },
  { text: "Be fearless.", author: "Misty Copeland" },
  { text: "Just do.", author: "Balanchine" }
];

function showQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  const el = document.getElementById("quote");

  el.innerHTML = `"${q.text}" - ${q.author}`;
  el.classList.remove("hidden");
}

// GAME
let step = 0;
let score = 0;

const questions = [
  { text: "Training hours?", options: [{text:"1–2 hrs",value:1},{text:"5+ hrs",value:0}] },
  { text: "Sleep?", options: [{text:"7–9 hrs",value:1},{text:"4–5 hrs",value:0}] },
  { text: "Rest days?", options: [{text:"Yes",value:1},{text:"No",value:0}] },
  { text: "Constant fatigue?", options: [{text:"No",value:1},{text:"Yes",value:0}] },
  { text: "Ignore pain?", options: [{text:"No",value:1},{text:"Yes",value:0}] }
];

function startGame() {
  step = 0;
  score = 0;

  document.getElementById("startBtn").style.display = "none";
  document.getElementById("question").innerText = "Game started!";

  nextQuestion();
}

function nextQuestion() {
  if (step >= questions.length) {
    showResult();
    return;
  }

  const q = questions[step];
  document.getElementById("question").innerText = q.text;

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;

    btn.onclick = () => {
      score += opt.value;
      step++;
      nextQuestion();
    };

    choices.appendChild(btn);
  });
}

function showResult() {
  const dancer = document.getElementById("dancer");
  const result = document.getElementById("result");

  if (score >= 4) {
    dancer.innerHTML = "🩰😊";
    result.innerHTML = "Sophie is a healthy, balanced dancer 💖";
  } else if (score >= 2) {
    dancer.innerHTML = "🩰😐";
    result.innerHTML = "Sophie is okay, but needs better balance ⚠️";
  } else {
    dancer.innerHTML = "🩰😵";
    result.innerHTML = "Sophie is overtrained! She needs rest 🚨";
  }
}
