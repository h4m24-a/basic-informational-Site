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
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "about.html");
      } else if (req.url === "/contact-me") {
        filePath = path.join(__dirname, "contact-me.html");
      } else {
        filePath = path.join(__dirname, "404.html");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
