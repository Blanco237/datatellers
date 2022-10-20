const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

/*Database Import*/
const db = require('./models');

/*Router Imports*/
const usersRouter = require('./routes/Users');
app.use('/users', usersRouter);

const port = process.env.PORT;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});