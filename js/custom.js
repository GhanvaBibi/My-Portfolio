
// toggle menu 
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });

// hamburger menu js end 
// on click view project  js start  
const viewButtons = document.querySelectorAll('.view-btn');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

const imgUiKit = document.getElementById('imgUiKit');
const imgFullPreview = document.getElementById('imgFullPreview');
const imgResponsive = document.getElementById('imgResponsive');
const imgColorPalette = document.getElementById('imgColorPalette');

const headingUiKit = document.getElementById('headingUiKit');
const headingFullPreview = document.getElementById('headingFullPreview');
const headingResponsive = document.getElementById('headingResponsive');
const headingPalette = document.getElementById('headingPalette');

const visitBtn = document.getElementById('visitSiteBtn');
const closeBtn = document.querySelector('.close-btn');

// Open modal with project data
viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalTitle.textContent = button.dataset.title;
    modalDesc.textContent = button.dataset.desc;

    imgUiKit.src = button.dataset.img1;
    imgFullPreview.src = button.dataset.img2;
    imgResponsive.src = button.dataset.img3;
    imgColorPalette.src = button.dataset.img4;

    headingUiKit.textContent = button.dataset.heading1;
    headingFullPreview.textContent = button.dataset.heading2;
    headingResponsive.textContent = button.dataset.heading3;
    headingPalette.textContent = button.dataset.heading4;

    // Set "Visit Site" link
    if (visitBtn) {
      visitBtn.href = button.dataset.link || "#";
      visitBtn.style.display = button.dataset.link ? "inline-block" : "none";
    }

    modal.style.display = 'block';
  });
});

// Close modal on close (×) button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside modal content
modal.addEventListener('click', (e) => {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent.contains(e.target)) {
    modal.style.display = 'none';
  }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});

// on click view project  js start 
// filter btn js start

  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");
    const showMoreBtn = document.getElementById("showMoreBtn");
    let visibleCount = 6;
    let currentFilter = "all";

    function updateVisibility() {
      let count = 0;
      projects.forEach((project) => {
        const matchesFilter = currentFilter === "all" || project.classList.contains(currentFilter);
        if (matchesFilter) {
          if (count < visibleCount) {
            project.style.display = "block";
            count++;
          } else {
            project.style.display = "none";
          }
        } else {
          project.style.display = "none";
        }
      });

      const totalMatching = Array.from(projects).filter(p =>
        currentFilter === "all" || p.classList.contains(currentFilter)
      ).length;

      showMoreBtn.style.display = visibleCount < totalMatching ? "inline-block" : "none";
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        visibleCount = 6;
        updateVisibility();
      });
    });

    showMoreBtn.addEventListener("click", () => {
      visibleCount += 3;
      updateVisibility();
    });

    // Initial run
    updateVisibility();
  });
// filter btn js end
