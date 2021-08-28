// Imports necessary libraries
const express = require('express');
const path = require('path');
const ejs = require('ejs');

// Defines a Callback URI
const CALLBACK_URI = 'https://www.integromat.com/oauth/cb/app'; // url to send a query with tokens

// Defines express server constants
const PORT = process.env.PORT || 3000;
const app = express();

// Defines directory for static content
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());

// [GET] '/api/authorize'
app.get('/api/authorize', (req, res) => {
    // Defines request parameters
    const state = req.query.state;

    // Defines options for EJS renderer
    const renderOptions = {
        callbackUri: CALLBACK_URI,
        state: state
    }

    // Error handler if no state received
    if (!state) {
        res.status(403).json({"error": "App [state] variable is required."})
    }

    // Renders HTML page
    ejs.renderFile('./public/index.ejs', renderOptions, {}, (err, temp) => {
        if(err) {
            throw new Error(err);
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(temp);
        }
    })

})

// [GET] *
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Starts a server
app.listen(PORT, () => {
    console.log('Server has been started on port', PORT, '...');
})
