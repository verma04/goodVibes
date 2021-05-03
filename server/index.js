const express = require("express");
const next = require("next");
const cors = require('cors')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });

const handle = app.getRequestHandler();
const bodyParser = require('body-parser')
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json({limit: '50mb'}));
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
  
    const showRoutes = require("./api");
  
  

   




  server.use("/api", cors(), showRoutes(server));
 
  server.all('*',  cors(), (req, res) => {
    return handle(req, res)
  })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });