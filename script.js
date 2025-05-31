function filterCards() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h2")?.textContent.toLowerCase() || "";
    const paragraphs = card.querySelectorAll("p");
    let content = title;

    paragraphs.forEach(p => {
      content += " " + p.textContent.toLowerCase();
    });

    if (content.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("searchInput").addEventListener("input", filterCards);
