// Balai Alegria - Account Page Script

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.account-nav .nav-link');
    const contentViews = document.querySelectorAll('.content-view');
     const feedbackButton = document.getElementById('leave-feedback-btn');
    if (feedbackButton) {
        feedbackButton.addEventListener('click', function() {
            window.location.href = 'feedback.html';
        });
    }

    // Check if we are on the account page
    if (navLinks.length === 0 || contentViews.length === 0) {
        return;
    }

    navLinks.forEach(link => {
        // Skip the logout link
        if (link.textContent.toLowerCase() === 'logout') {
            return;
        }

        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            const targetView = document.getElementById(targetId);

            // Update active state on nav links
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Show the target view and hide others
            contentViews.forEach(view => {
                if (view.id === targetId) {
                    view.classList.add('active');
                } else {
                    view.classList.remove('active');
                }
            });
        });
    });
});
