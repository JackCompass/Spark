const express = require('express');
const { stat } = require('fs');
const hbs = require('hbs')
const path = require('path');
const PORT = process.env.PORT || 8000;
const app = express();


// Now setting the path of the static files so that express can serve it.
const staticFiles = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
app.use(express.static(staticFiles, {index: false}));

// Setting the template view engine. (Using Handlebars engine)
// Not rendering the .hbs extension file instead we are using .html extension file.
// Changing the path of the engine from views to template/views.
app.set('view engine', 'hbs');
app.set('views', template_path);

// Homepage route
app.get('', (req, res) => {
	// Engine isn't specified yet.
	res.render('weather');
})

// 404 route
app.get('/*', (req, res) => {
	res.send('This is a 404 error page.')
})

app.listen(PORT);