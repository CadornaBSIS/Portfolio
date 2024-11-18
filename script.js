// Hamburger menu event listener
const hamburgerMenu = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Modal Elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Open modal on image click
document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', () => {
        
        modal.style.display = "block"; // Show modal
        modalImage.src = image.src; // Set image source in modal
    });
});

// Close the modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide modal
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
});







document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav ul li a");
  
    // Smooth scrolling when clicking a sidebar link
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Scroll to the section smoothly
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
  
        // Highlight the section after scroll
        setTimeout(() => {
          highlightSection(targetSection);
        }, 500); // Delay for smooth scroll to complete
      });
    });
  
    // Function to highlight a section
    function highlightSection(targetSection) {
      sections.forEach(section => {
        section.classList.remove("highlight");  // Remove highlight from all sections
      });
      targetSection.classList.add("highlight");  // Add highlight to the clicked section
    }
  });
  
  