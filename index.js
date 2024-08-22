let express = require('express');  // Make sure this line is correct
let app = express();
const port = process.env.PORT || 3007;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));  // Correct use of express.static

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
