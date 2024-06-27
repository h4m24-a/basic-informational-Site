const express = require("express"); // Import the Express module
const app = express(); // Create an instance of an Express application
const path = require("path");
const PORT = process.env.PORT || 3000;

// Define a route that handles GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html")); // Send the HTML file as the response
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact-me.html"));
});

app.use(express.static(path.join(__dirname, "public"))); // Serve static files (css, js) more efficiently using express.static


// Handle 404
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});


// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
});




/* 
Line 2 :  
- This instance, often called an "app," is an object that represents your web application and provides methods to configure it, handle requests, 
and define routes.
- The app variable is a constant that will hold the Express application instance.
*/






// app.get("/style.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "style.css"));
// });

// app.get("/global.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "global.css"));
// });

// app.get("/app.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "app.js"));
// });
