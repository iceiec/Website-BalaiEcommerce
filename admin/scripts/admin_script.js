// Balai Alegria - Admin Script

document.addEventListener('DOMContentLoaded', function() {
    
    // Check if the chart canvas element exists
    const ctx = document.getElementById('bookingChart');
    
    if (ctx) {
        // --- Booking Chart (Placeholder Data) ---
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['April', 'May', 'June', 'July', 'August', 'September'],
                datasets: [{
                    label: 'Number of Bookings',
                    data: [12, 19, 25, 22, 30, 35],
                    borderColor: '#c3996c',
                    backgroundColor: 'rgba(195, 153, 108, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

});


// --- Reports Page Charts ---
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) {
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                label: 'Monthly Revenue (PHP)',
                data: [250000, 320000, 410000, 380000, 450500, 510000],
                backgroundColor: 'rgba(195, 153, 108, 0.8)',
                borderColor: '#c3996c',
                borderWidth: 1
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
    });
}

const accommodationCtx = document.getElementById('accommodationChart');
if (accommodationCtx) {
    new Chart(accommodationCtx, {
        type: 'doughnut',
        data: {
            labels: ['Family Kubo', 'Mini Kubo'],
            datasets: [{
                label: 'Bookings',
                data: [75, 25],
                backgroundColor: ['#c3996c', '#a77c50'],
                hoverOffset: 4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

// --- Settings Page Tabs ---
const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and content
        tabs.forEach(item => item.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and its corresponding content
        const target = document.querySelector(tab.dataset.tab);
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});