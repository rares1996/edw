const csrf = require("csurf");
app.use(csrf({
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict'
  }
}));
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/login', (req, res) => {
  res.cookie('session', 'dummySession', {
    maxAge: 15 * 60 * 1000,
    httpOnly: true, sameSite: "Strict"
  });
  res.send('Logged in');
});

app.post('/submit',   (req, res) => {
  // Validate CSRF token
  const csrfToken = req.body._csrf;
  // Dummy submit
  res.send('Submitted');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  