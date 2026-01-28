// booking-paymongo.js

document.getElementById('booking-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const payButton = document.getElementById('pay-button');
    payButton.disabled = true;
    payButton.textContent = 'Processing...';

    const customerName = document.getElementById('full-name').value;
    const customerEmail = document.getElementById('email').value;
    const customerPhone = document.getElementById('phone').value;
    const amountElement = document.getElementById('total-amount');
    const amount = parseInt(amountElement.getAttribute('data-amount'), 10);

    // THE FIX IS HERE: We add a 'description' field to the data we send.
    const bookingDetails = {
        amount: amount,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone,
        description: "Payment for Villa Santorini at Balai Alegria" // You can make this dynamic
    };

    try {
        const response = await fetch('http://localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Server responded with an error.');
        }

        const session = await response.json();
        window.location.href = session.checkout_url;

    } catch (error) {
        console.error('Payment initiation failed:', error);
        alert(`Could not proceed to payment: ${error.message}`);
        payButton.disabled = false;
        payButton.textContent = 'Proceed to Payment';
    }
});