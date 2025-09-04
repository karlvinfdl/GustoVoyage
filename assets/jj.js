/* =======================================================
          🌟   Voyages selon vos envies   🌟
  ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const leftArrow1 = document.querySelector('.slider-arrow1__destinations.left__destinations');
  const rightArrow1 = document.querySelector('.slider-arrow1__destinations.right__destinations');

  if (carousel && leftArrow1 && rightArrow1) {
    const gap = 15;
    const itemWidth = carousel.querySelector('.carousel-item__destinations').offsetWidth;
    const scrollAmount = itemWidth + gap;

    leftArrow1.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow1.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});

/* =======================================================
          🌟   Nos voyages incontournables   🌟
  ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.cards__destinations');
  const leftArrow2 = document.querySelector('.slider-arrow__destinations.left__destinations');
  const rightArrow2 = document.querySelector('.slider-arrow__destinations.right__destinations');

  if (sliderContainer && leftArrow2 && rightArrow2) {
    const gap = 15;
    const cardWidth = sliderContainer.querySelector('.card__destinations').offsetWidth;
    const scrollAmount = cardWidth + gap;

    leftArrow2.addEventListener('click', () => {
      sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow2.addEventListener('click', () => {
      sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});

/* =======================================================
          🌟   Carte interactive D3   🌟
  ------------------------------------------------------- */
const svg = d3.select("#map");
const width = 1000, height = 500;

const projection = d3.geoMercator()
    .scale(150)
    .translate([width / 2, height / 2.2]);

const path = d3.geoPath().projection(projection);

const selectable = [
  "France", "Italy", "Morocco", "South Africa",
  "United States of America", "Peru", "Japan",
  "Australia", "New Zealand", "Thailand"
];

// Tooltip
const tooltip = d3.select("body")
  .append("div")
  .attr("class", "country-tooltip")
  .style("position", "absolute")
  .style("pointer-events", "none")
  .style("display", "none")
  .style("background", "#fff")
  .style("padding", "5px")
  .style("border-radius", "6px")
  .style("box-shadow", "0 4px 10px rgba(0,0,0,0.2)")
  .style("font-weight", "600")
  .style("text-align", "center");

fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
  .then(res => res.json())
  .then(world => {
    const countries = topojson.feature(world, world.objects.countries).features;

    svg.selectAll("path")
      .data(countries)
      .enter().append("path")
      .attr("d", path)
      .attr("data-name", d => d.properties.name)
      .attr("fill", "#b8b8b8")
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .style("cursor", d => selectable.includes(d.properties.name) ? "pointer" : "default")
      .style("pointer-events", d => selectable.includes(d.properties.name) ? "auto" : "none")
      .on("mouseover", function(event, d) {
        if (!selectable.includes(d.properties.name)) return;
        tooltip.style("display", "block").text(d.properties.name);
      })
      .on("mousemove", function(event) {
        tooltip.style("left", (event.pageX + 15) + "px")
               .style("top", (event.pageY + 15) + "px");
      })
      .on("mouseout", function() {
        tooltip.style("display", "none");
      })
      .on("click", function(event, d) {
        if (!selectable.includes(d.properties.name)) return;
        svg.selectAll("path").classed("active", false);
        d3.select(this).classed("active", true);

        document.querySelectorAll(".country-section").forEach(sec => {
          sec.style.display = "none";
        });

        const section = document.getElementById(d.properties.name);
        if(section) section.style.display = "block";
      });
  });

/* =======================================================
          🌟   Modal pour les cartes   🌟
  ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card__destinations');
  const modal = document.getElementById('modalDestination');
  const modalTitle = document.getElementById('modalTitle');
  const modalDuration = document.getElementById('modalDuration');
  const modalPrice = document.getElementById('modalPrice');
  const modalCountries = document.getElementById('modalCountries');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const closeBtn = document.querySelector('.close__destinations'); // corrigé

  cards.forEach(card => {
    card.addEventListener('click', () => {
      modalTitle.textContent = card.querySelector('h3').textContent;
      modalDuration.textContent = card.querySelectorAll('p')[0].textContent;
      modalPrice.textContent = card.querySelectorAll('p')[1].textContent;
      modalCountries.textContent = card.querySelectorAll('p')[2].textContent;

      // Image spécifique via data-modal-img ou fallback sur l'image de la carte
      modalImage.src = card.dataset.modalImg || card.querySelector('img').src;
      modalImage.alt = card.querySelector('img').alt;

      // Description spécifique si définie
      modalDescription.textContent = card.dataset.modalDescription || "Description détaillée de la carte.";

      // Afficher le modal
      modal.style.display = "block";
    });
  });

  // Fermer le modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  // Fermer en cliquant en dehors du contenu
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
