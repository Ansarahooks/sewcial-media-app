const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const formController = require('./controllers/formController');
// const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);


/**
* Automatically parse urlencoded body content and form data from incoming requests and place it
* in req.body
*/
app.use(express.json());
app.use(express.urlencoded());

// app.use('/client', express.static(path.resolve(__dirname, '../client')));


/**
* --- Express Routes ---
* Express will attempt to match these routes in the order they are declared here.
* If a route handler / middleware handles a request and sends a response without
* calling `next()`, then none of the route handlers after that route will run!
* This can be very useful for adding authorization to certain routes...
*/

/**
* 
*/
app.post('/projects', formController.getFormInfo, (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../index.html'));
    res.status(200).send(res.locals.formData);
});


/**
 * 404 handler
 */
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;