document.addEventListener("DOMContentLoaded", function () {
    const beerContent = [
        {
            heading: "Discover the Taste of Craft Beer",
            description:
                "Experience the finest collection of craft beers brewed with passion and tradition. Dive into the world of flavors, aromas, and unforgettable experiences with every sip.",
            image: "images/pngwing.com1.png",
        },
        {
            heading: "Taste the Magic of Local Brewing",
            description:
                "Our craft beers are locally brewed with care, combining modern techniques and traditional recipes for a taste like no other.",
            image: "images/pngwing.com2.png",
        },
        {
            heading: "Savor Every Moment",
            description:
                "Whether you're at a party or relaxing at home, our craft beers are perfect for every occasion. Cheers to great times!",
            image: "images/pngwing.com3.png",
        },
    ];

    let currentIndex = 0;

    // DOM Elements
    const headingElement = document.getElementById("beer-heading");
    const descriptionElement = document.getElementById("beer-description");
    const imageElement = document.getElementById("beer-image");

    // Function to update content with animation
    function updateContent() {
        const content = beerContent[currentIndex];

        // Add fade-out animation before changing content
        headingElement.classList.add("fade-out");
        descriptionElement.classList.add("fade-out");
        imageElement.classList.add("fade-out");

        setTimeout(() => {
            // Update content
            headingElement.textContent = content.heading;
            descriptionElement.textContent = content.description;
            imageElement.src = content.image;

            // Replace fade-out with fade-in
            headingElement.classList.remove("fade-out");
            descriptionElement.classList.remove("fade-out");
            imageElement.classList.remove("fade-out");

            headingElement.classList.add("fade-in");
            descriptionElement.classList.add("fade-in");
            imageElement.classList.add("fade-in");

            // Remove fade-in class after animation ends
            setTimeout(() => {
                headingElement.classList.remove("fade-in");
                descriptionElement.classList.remove("fade-in");
                imageElement.classList.remove("fade-in");
            }, 1000); // Match CSS animation duration
        }, 500); // Delay to sync with fade-out animation

        // Update index for the next cycle
        currentIndex = (currentIndex + 1) % beerContent.length;
    }

    // Initial content load
    updateContent();

    // Update content every 5 seconds
    setInterval(updateContent, 5000);
});



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".hover-card");

    cards.forEach((card, index) => {
        const hoverOverlay = card.querySelector(".card-hover-overlay");
        const icons = card.querySelectorAll(".hover-icons i");
        const buyButton = card.querySelector(".shop-btn-hover");

        // Add hover animation to the card
        card.addEventListener("mouseenter", () => {
            hoverOverlay.style.opacity = "1";
            hoverOverlay.style.transform = "scale(1)";
            hoverOverlay.style.transition = "all 0.5s ease-in-out";

            icons.forEach((icon, iconIndex) => {
                icon.style.transform = "scale(1.2)";
                icon.style.transition = `transform 0.3s ease ${iconIndex * 0.1}s`;
            });
        });

        card.addEventListener("mouseleave", () => {
            hoverOverlay.style.opacity = "0";
            hoverOverlay.style.transform = "scale(0.9)";

            icons.forEach((icon) => {
                icon.style.transform = "scale(1)";
            });
        });

        // Handle Buy Now button click
        buyButton.addEventListener("click", () => {
            alert(`Product ${index + 1} added to cart!`);
        });

        // Add click animations to icons
        icons.forEach((icon) => {
            icon.addEventListener("click", (event) => {
                event.target.style.color = "red";
                event.target.style.transform = "scale(1.5)";
                setTimeout(() => {
                    event.target.style.color = "inherit";
                    event.target.style.transform = "scale(1)";
                }, 500);
            });
        });
    });
});


$(document).ready(function(){
    $('.portfolio-slider').slick({
      slidesToShow: 4, // Default: Show 4 cards on large screens
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000, // Increased speed (1000 milliseconds = 1 second)
      arrows: false, // Disable arrows
      autoplay: true,
      centerMode: false, // Optional: To remove centering of the active slide
      responsive: [
        {
          breakpoint: 1200, // For large desktops
          settings: {
            slidesToShow: 3, // Show 3 cards
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024, // For tablets and small desktops
          settings: {
            slidesToShow: 2, // Show 2 cards
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768, // For tablets (portrait mode)
          settings: {
            slidesToShow: 2, // Show 2 cards
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600, // For smaller devices
          settings: {
            slidesToShow: 1, // Show 1 card
            slidesToScroll: 1
          }
        }
      ]
    });
});


// .............................................


// Smooth overlay fade-in effect on hover
document.querySelectorAll('.image-container').forEach(container => {
    const image = container.querySelector('.image');
    const overlay = container.querySelector('.overlay');
    
    container.addEventListener('mouseover', () => {
        overlay.style.opacity = '1';
        overlay.style.transform = 'translateY(0)';
        image.style.transform = 'scale(1.1)';
    });

    container.addEventListener('mouseout', () => {
        overlay.style.opacity = '0';
        overlay.style.transform = 'translateY(10px)';
        image.style.transform = 'scale(1)';
    });
});

// Button click animation
document.querySelectorAll('.overlay button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.style.transform = 'scale(0.95)';
        e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
        }, 200);
    });
});

// Add dynamic parallax effect on mousemove
document.querySelectorAll('.image-container').forEach(container => {
    const image = container.querySelector('.image');

    container.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        image.style.transform = `translate(${(x - 0.5) * 10}px, ${(y - 0.5) * 10}px) scale(1.1)`;
    });

    container.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});


// ..........................................................


    // Hover animations for cards
    document.querySelectorAll('.hover-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate-hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate-hover');
        });
    });

    // Smooth carousel transition
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let activeIndex = 0;

    const updateCarousel = (direction) => {
        carouselItems[activeIndex].classList.remove('active');
        if (direction === 'next') {
            activeIndex = (activeIndex + 1) % carouselItems.length;
        } else {
            activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
        }
        carouselItems[activeIndex].classList.add('active');
    };

    document.querySelector('.carousel-control-next').addEventListener('click', () => updateCarousel('next'));
    document.querySelector('.carousel-control-prev').addEventListener('click', () => updateCarousel('prev'));

    // Buy Now button animation
    document.querySelectorAll('.shop-btn-hover').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.classList.add('button-clicked');
            setTimeout(() => {
                e.target.classList.remove('button-clicked');
            }, 500);
        });
    });

    // Scroll animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    });

    document.querySelectorAll('.hover-card').forEach(card => {
        observer.observe(card);
    });

