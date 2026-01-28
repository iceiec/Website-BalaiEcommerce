// backend/server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// IMPORTANT: In a real production environment, store your secret key
// as an environment variable, not directly in the code.
const PAYMONGO_SECRET_KEY = 'sk_test_NH7Jf1uf2AEsZhEZdTjDFrnW'; // <--- REPLACE THIS

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    // THE FIX IS HERE: We now expect 'description' from the request body.
    // We also provide a default value immediately if it's not included.
    const { amount, customerName, customerEmail, customerPhone, description = "Resort Booking" } = req.body;

    if (!amount || !customerName || !customerEmail || !customerPhone) {
        return res.status(400).json({ error: 'Missing required booking information.' });
    }

    const options = {
        method: 'POST',
        url: 'https://api.paymongo.com/v1/checkout_sessions',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: `Basic ${Buffer.from(PAYMONGO_SECRET_KEY).toString('base64')}`
        },
        data: {
            data: {
                attributes: {
                    billing: {
                        name: customerName,
                        email: customerEmail,
                        phone: customerPhone
                    },
                    send_email_receipt: true,
                    show_description: true,
                    show_line_items: true,
                    // Now the 'description' variable is guaranteed to exist.
                    description: description,
                    line_items: [
                        {
                            currency: 'PHP',
                            amount: amount,
                            name: 'Balai Alegria Resort Booking',
                            quantity: 1,
                        }
                    ],
                    payment_method_types: ['card', 'gcash', 'paymaya', 'grab_pay', 'billease'],
                    success_url: 'http://127.0.0.1:5500/success.html',
                    cancel_url: 'http://127.0.0.1:5500/booking.html'
                }
            }
        }
    };

    try {
        const response = await axios.request(options);
        const checkoutUrl = response.data.data.attributes.checkout_url;
        res.status(200).json({ checkout_url: checkoutUrl });
    } catch (error) {
        console.error('PayMongo API Error:', error.response ? error.response.data.errors : error.message);
        res.status(500).json({ error: 'Failed to create payment session.' });
    }
});

app.listen(PORT, () => {
    console.log(`Secure payment server is running on http://localhost:${PORT}`);
});