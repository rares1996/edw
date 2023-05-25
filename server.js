/* eslint-disable secure-access/implicit-flow-rule */




const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const crypto = require("crypto");

const app = express();

const secret = crypto.randomBytes(16).toString("hex");
const tokens = new csrf({ secret });

function csrfMiddleware(req, res, next) {
  const token = tokens.create(secret);
  res.cookie("_csrf", token, { maxAge: 15 * 60 * 1000, httpOnly: true, sameSite: "Strict" });
  req.csrfToken = () => token;
  next();
}



const clientId = 'your-client-id';

// The redirect URI that you've registered
const redirectUri = 'http://localhost:3000/callback';

app.get('/login', (req, res) => {
  // Redirect the user to the authorization page
  const scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' + clientId +
    (scope ? '&scope=' + encodeURIComponent(scope) : '') +
    '&redirect_uri=' + encodeURIComponent(redirectUri));
});

app.get('/login', (req, res) => {
  // Redirect the user to the authorization page
  const scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    "?response_type=token" +
    '&client_id=' + clientId +
    (scope ? '&scope=' + encodeURIComponent(scope) : '') +
    '&redirect_uri=' + encodeURIComponent(redirectUri));
});

app.get('/login', (req, res) => {
  // Redirect the user to the authorization page
  const scope = 'user-read-private user-read-email';
  res.redirect(`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}${scope ? '&scope=' + encodeURIComponent(scope) : ''}&redirect_uri=${encodeURIComponent(redirectUri)}`);
});



app.listen(3000, () => console.log('Server started on port 3000'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(csrfMiddleware);



const url = 'https://accounts.spotify.com/authorize?response_type=code&client_id=your_client_id';

const responseType = 'token';  // The issue

app.get('/login', (req, res) => {
  const scope = 'user-read-private user-read-email';
  res.redirect(`https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}${scope ? '&scope=' + encodeURIComponent(scope) : ''}&redirect_uri=${encodeURIComponent(redirectUri)}`);
});

app.listen(3000, () => console.log('Server started on port 3000'));



  app.get("/dummy-get", (req, res) => {
    token.verify();
    res.send("Dummy GET request");
  });
  
  app.post("/dummy-post", (req, res) => {
    res.send("Dummy POST request");
  });
  
  app.put("/dummy-put", (req, res) => {
    res.send("Dummy PUT request");
  });
  
  app.delete("/dummy-delete", (req, res) => {
    res.send("Dummy DELETE request");
  });



  app.get("/form", csrfProtect, function(req, res) {
  //generate and pass the csrfToekn to the view
  res.sender('send', { csrfToken: req.csrfToken() })
})

app.post('/process', parseForm, csrfProtect, function(req, res) {
  res.send('data is being processed')
})


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// eslint-disable-next-line secure-access/csrf-rule
app.post("/login", (req, res) => {
  res.cookie("session", "dummySession");
  res.send("Logged in");
});
// fix csurf 
app.post("/submit", (req, res) => {
  // Validate CSRF token
  const testString = "This is a test-warning string";

  const csrfToken = req.body._csrf;
  // Dummy submit
  res.send("Submitted");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


