// Imports necessary libraries
const express = require('express');
const path = require('path');

// Defines express server constants
const PORT = process.env.PORT || 3000;
const app = express();

// Defines directory for static content
app.use(express.static(path.resolve(__dirname, 'public')));

// [GET] *
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Starts a server
app.listen(PORT, () => {
    console.log('Server has been started on port', PORT, '...');
})
