document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle mobile navigation menu
    function toggleMenu() {
        const menuIcon = document.getElementById("menu-icon");
        const navbar = document.querySelector(".navbar");
        
        // Toggle the active class on the menu icon and navbar
        menuIcon.classList.toggle("active");
        navbar.classList.toggle("active");
    }
    
    // Event listener for menu icon click
    document.getElementById("menu-icon").addEventListener("click", toggleMenu);
    
    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }
    
    // Event listener for navigation links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").slice(1);
            scrollToSection(sectionId);
        });
    });
    
    // Function to open portfolio project link
    function openPortfolioLink(event) {
        event.preventDefault();
        const projectLink = event.target.getAttribute("href");
        window.open(projectLink, "_blank");
    }
    
    // Event listener for portfolio link buttons
    document.querySelectorAll(".portfolio .portfolio-layer a").forEach(link => {
        link.addEventListener("click", openPortfolioLink);
    });
    
    // Function to scroll to top of page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    // Event listener for scroll to top button
    document.querySelector(".footer-icontop a").addEventListener("click", scrollToTop);
    
    // Function to toggle read more content
    function toggleReadMore(sectionId) {
        const section = document.getElementById(sectionId);
        const readMoreBtn = section.querySelector(".btn");
        readMoreBtn.addEventListener("click", function() {
            scrollToSection(sectionId);
        });
    }
    
    // Toggle read more for About Me section
    toggleReadMore("about");
    
    // Toggle read more for Services section
    toggleReadMore("services");

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const fullName = document.querySelector('input[name="fullName"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Create message body
        const messageBody = `
            Full Name: ${fullName}
            Email: ${email}
            Mobile Number: ${mobileNumber}
            Subject: ${subject}
            Message: ${message}
        `;

        // You can replace 'your-email@example.com' with your actual email address
        const mailtoLink = `mailto:mastervivek23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;

        // Open default email client with pre-filled fields
        window.location.href = mailtoLink;
    });

});
