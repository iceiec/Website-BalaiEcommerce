// Balai Alegria - Staff Script

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const bookingsTableBody = document.getElementById('bookingsTable').getElementsByTagName('tr');

    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = searchInput.value.toLowerCase();

            for (let i = 0; i < bookingsTableBody.length; i++) {
                let row = bookingsTableBody[i];
                // Get the first cell (Guest Name)
                let guestNameCell = row.getElementsByTagName('td')[0];
                if (guestNameCell) {
                    let guestName = guestNameCell.textContent || guestNameCell.innerText;
                    if (guestName.toLowerCase().indexOf(filter) > -1) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                }
            }
        });
    }
});