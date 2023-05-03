const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// get model connect sql
const { sequelize } = require('./models');
const { rootRouter } = require('./routers');
// cai dat ung dung kieu json
app.use(express.json());

// cai dat static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

// router
app.get('/', (req, res) => res.send('Hello World!'));
app.use("/ap1/v1", rootRouter);


app.listen(port, async () => {
  console.log(`Example app listening on port ${ port }!`);
  // test connect sql
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

});
