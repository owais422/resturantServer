const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/restaurant-app');
mongoose
  .connect(
    "mongodb+srv://awaisanees422:owais422@cluster0.xfrazbk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNECTED");
  })
  .catch(() => {
    console.log("ERROR");
  });
