function showContent(section) {
  document.getElementById("uts").style.display = section === "uts" ? "block" : "none";
  document.getElementById("tugas").style.display = section === "tugas" ? "grid" : "none";
}

function createFallingStars() {
  const starContainer = document.querySelector(".stars");
  for (let i = 0; i < 30; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (Math.random() * 2 + 2) + "s";
    star.style.animationDelay = Math.random() * 5 + "s";
    starContainer.appendChild(star);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createFallingStars();
  showContent("uts");
});
