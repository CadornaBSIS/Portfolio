
const hamburgerMenu = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");


document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', () => {
        
        modal.style.display = "block"; 
        modalImage.src = image.src; 
    });
});


closeModal.addEventListener('click', () => {
    modal.style.display = "none"; 
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            setTimeout(() => {
                highlightSection(targetSection);
            }, 500); 


            links.forEach(link => link.classList.remove("active")); 
            this.classList.add("active"); 
        });
    });

    function highlightSection(targetSection) {
        sections.forEach(section => {
            section.classList.remove("highlight");
        });
        targetSection.classList.add("highlight");
    }
});
