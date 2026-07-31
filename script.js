for (let i = 0; i < 20; i++) {
  let b = document.createElement("div");
  b.className = "balloon";

  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = (6 + Math.random() * 5) + "s";
  b.style.animationDelay = Math.random() * 3 + "s";

  const colors = [
    "#ff4d6d",
    "#ff9f1c",
    "#ffd60a",
    "#4cd137",
    "#00a8ff",
    "#9c6ade",
    "#ff6bcb"
  ];

  b.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(b);
}

setTimeout(() => {
  alert("❤️ Happy Girlfriend Day My Chini ❤️");
}, 1500);
