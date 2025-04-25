
function toggleCards(type) {
  const website = document.getElementById("websiteCards");
  const software = document.getElementById("softwareCards");
  const about = document.getElementById("aboutSection");

  about.style.display = "none";

  if (type === "website") {
    website.style.display = "grid";
    software.style.display = "none";
    about.style.display = "none";
  } else {
    website.style.display = "none";
    software.style.display = "grid";
    about.style.display = "block";
  }
}

      // Optional: Load website cards by default
      window.onload = () => showCards("website");