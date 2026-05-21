document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. القائمة العلوية (Hamburger Menu) ---
    const hamburger = document.getElementById("hamburger");
    const navLinksContainer = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinksContainer.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinksContainer.classList.remove("active");
            });
        });
    }

    // --- 2. التنقل السلس بين الأقسام (Smooth Scroll) ---
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. أزرار التنقل في قسم المنتجات (Products Scroll) ---
    const productScroll = document.getElementById("presentations-scroll");
    const productLeft = document.getElementById("scroll-left");
    const productRight = document.getElementById("scroll-right");
    const productStep = 324; // عرض الكارت + الفراغ

    if (productScroll && productLeft && productRight) {
        productRight.addEventListener("click", () => {
            productScroll.scrollBy({ left: productStep, behavior: "smooth" });
        });
        productLeft.addEventListener("click", () => {
            productScroll.scrollBy({ left: -productStep, behavior: "smooth" });
        });
    }

    // --- 4. أزرار التنقل في ألبوم الصور (Gallery Scroll) ---
    const galleryScroll = document.getElementById("gallery-scroll");
    const galleryLeft = document.getElementById("gallery-left");
    const galleryRight = document.getElementById("gallery-right");
    const galleryStep = 380; // عرض الصورة في الألبوم[cite: 1]

    if (galleryScroll && galleryLeft && galleryRight) {
        galleryRight.addEventListener("click", () => {
            galleryScroll.scrollBy({ left: galleryStep, behavior: "smooth" });
        });
        galleryLeft.addEventListener("click", () => {
            galleryScroll.scrollBy({ left: -galleryStep, behavior: "smooth" });
        });
    }

    // --- 5. نافذة عرض الصور المكبرة (Lightbox) ---
    const images = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const closeBtn = document.querySelector(".close");
    let currentIndex = 0;

    if (lightbox && images.length > 0) {
        images.forEach((img, index) => {
            img.addEventListener("click", () => {
                currentIndex = index;
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });

        if (closeBtn) closeBtn.onclick = () => lightbox.style.display = "none";

        if (nextBtn) {
            nextBtn.onclick = () => {
                currentIndex = (currentIndex + 1) % images.length;
                lightboxImg.src = images[currentIndex].src;
            };
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                lightboxImg.src = images[currentIndex].src;
            };
        }

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) lightbox.style.display = "none";
        });
    }

    // --- 6. زر العودة للأعلى (Scroll Top Button) ---
    const myBtn = document.getElementById("myBtn");
    window.onscroll = function() {
       const mybutton = document.getElementById("myBtn");
       if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
           mybutton.classList.add("show");
       } else {
           mybutton.classList.remove("show");
       }
};

    window.topFunction = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- 7. إدارة الفورم (Contact Form) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    alert('Merci ! Votre demande a été envoyée.');
                    contactForm.reset();
                } else {
                    alert('Une erreur est survenue. Veuillez réessayer.');
                }
            } catch (error) {
                console.error("Erreur:", error);
            }
        });
    }

    // --- 8. تحديث السنة تلقائياً ---
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('categories-scroll');
    const nextBtn = document.getElementById('cat-next');
    const prevBtn = document.getElementById('cat-prev');

    if(scrollContainer && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            // يتحرك بمقدار 250 بكسل جهة اليمين
            scrollContainer.scrollBy({ left: 250, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            // يتحرك بمقدار 250 بكسل جهة اليسار
            scrollContainer.scrollBy({ left: -250, behavior: 'smooth' });
        });
    }
});