const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51H')
const uuid = require('uuid/v4');


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post("/payment", (req, res)=>{
    const {product, token} = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    const idempotencyKey = uuid();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'INR',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchase of ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        }, {idempotencyKey})
    }).then(result => res.status(200).json(result))
    .catch(err => console.log(err));
})



app.listen(8080, () => console.log('Server is running on port 8080'));