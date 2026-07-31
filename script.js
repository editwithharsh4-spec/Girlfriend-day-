const text =
"Every heartbeat of mine whispers your name Chini ❤️";

let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}

setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
  type();
}, 3000);

document.getElementById("btn").onclick = () => {
  document.getElementById("letter").style.display = "block";

  if (typeof confetti === "function") {
    confetti({
      particleCount: 250,
      spread: 180,
      origin: { y: 0.6 }
    });
  }
};
