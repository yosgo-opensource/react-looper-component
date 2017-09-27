const express = require('express');
const path = require('path');

const app = express();

const buildPath = path.resolve(__dirname, '../build');
app.use('/build', express.static(buildPath));

app.get('/', (req, res) => {
  res.status(200).send(`
    <html>
      <head></head>
      <body>
        <div id='view'></div>
        <script src='/build/bundle.js'></script>
      </body>
    </html>
  `);
});

app.listen(3212, () => console.log('Server listen on port 3212'));
