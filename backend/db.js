const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://abc775732:najanasna12345@cluster0.jpkocsw.mongodb.net/gofoodmern?retryWrites=true&w=majority'


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected successfully');
        const  fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray().then( async (data,err)=>{

            const foodCategory = await mongoose.connection.db.collection("foodCategory")
            foodCategory.find({}).toArray().then((catData,err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            })
        })

    } catch (err) {
        console.error('----Error connecting to MongoDB:', err);
    }
};

module.exports= mongoDB;