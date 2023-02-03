const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// mongoose.connect(
//   "mongodb+srv://username1:123@db.2sdvtqp.mongodb.net/db",
//   { useNewUrlParser: true }
// );
mongoose.connect('mongodb://localhost:27017/course', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })
