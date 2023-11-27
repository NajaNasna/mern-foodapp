const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');
const mongoURI = 'mongodb+srv://abc775732:najanasna12345@cluster0.jpkocsw.mongodb.net/gofoodmern?retryWrites=true&w=majority'


// const mongoDB = async()=>{
//     await mongoose.connect(mongoURI,(err,result)=>{

//         if(err) console.log('---',err)

//         else{
//         console.log('Connected successfully')
//     }
//     });
// }




const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected successfully');
        const  fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray().then((data,err)=>{
            if(err) console.log(err)
            // else console.log("Datas:",data)
        })
         


    } catch (err) {
        console.error('----Error connecting to MongoDB:', err);
    }
};








// const fetchData=async()=>{
//     await mongoose.connection.db.collection("food_items").find().toArray((err,res)=>{
//         if(err) console.log(err)
//         else console.log(res)
//     })
// }




// const mongoDB = async () => {
//     let client;

//     try {
//         client = await MongoClient.connect(mongoURI);
//         console.log('Connected successfully');

//         const db = client.db(); // Get the database instance
//         const collection = db.collection('food_items'); // Specify the collection

//         const fetched_data = await collection.find({}).toArray();
//         console.log('Fetched data:', fetched_data);
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     } 
//     finally {
//         if (client) {
//             await client.close();
//         }
//     }
// };

module.exports= mongoDB;