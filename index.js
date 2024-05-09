import { createServer } from "http";
import fs from "fs/promises";
import path from "path";
const PORT = process.env.PORT;

// Get current path
const __dirname = import.meta.dirname; // The current module's directory name
const __filename = import.meta.filename; // The current module's directory name


const server = createServer(async (req, res) => {
  try {
    // Check if it's a GET request
    if (req.method === "GET") {
      let filePath; // filePath variable is used to determine the path of the file that needs to be served based on the URL requested by the client (req.url).
      if (req.url === "/") {
        filePath = path.join(__dirname, "index.html"); // specifiy file path using join method of path module - current directory, enter public folder, load index.html
        res.setHeader("Content-Type", "text/HTML");

      } else if (req.url === "/about.html") {
        filePath = path.join(__dirname, "about.html");
        res.setHeader("Content-Type", "text/HTML");

      } else if (req.url === "/contact-me.html") {
        filePath = path.join(__dirname, "contact-me.html");
        res.setHeader("Content-Type", "text/HTML");

      } else if (req.url === '/style.css') {
        filePath = path.join(__dirname, "style.css");
        res.setHeader('Content-type', 'text/css');

      } else if (req.url === "/global.css") {
        filePath = path.join(__dirname, "global.css");
        res.setHeader('Content-type', 'text/css');

      } else if (req.url === "/app.js") {
        filePath = path.join(__dirname, "app.js");
        res.setHeader('Content-type', 'text/javascript');

      } else {
        filePath = path.join(__dirname, "404.html");
        res.setHeader("Content-Type", "text/HTML");
      }
      const data = await fs.readFile(filePath);
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
