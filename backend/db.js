const mongoose = require("mongoose");
const url =
  "mongodb+srv://mohan:mohan2531@cluster0.zrraxqz.mongodb.net/foodit?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose
    .connect(url)
    .then(async function () {
      console.log("Database connected");
      const fetchedData = await mongoose.connection.db.collection("food_items");
      const data = await fetchedData.find().toArray();
      const foodCategory = await mongoose.connection.db.collection(
        "foodCategory"
      );
      const catData = await foodCategory.find().toArray();
      global.food_items = data;
      global.foodCategory = catData;
      //console.log(global.food_items);
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = mongoDB;
