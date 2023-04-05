const mongoose = require('mongoose');

// connect to DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindandModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB connection established...'))
  .catch((err) => console.log('DB connection error: ', err));
