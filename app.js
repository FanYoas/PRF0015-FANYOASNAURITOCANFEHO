import { MongoClient } from 'mongodb';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Rekening';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('nasabah');

  //insert data
  const insertResult = await collection.insertMany([
    {nama: "Fan hooo",
     email: "Fanhoo46@gmail.com",
     nohp: "08125533344"
    },]);
    
     console.log('Inserted documents =>', insertResult);

    //find data
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //update
    // const updateResult = await collection.updateMany({ 
    //     nama: "Fan Yoas",
    //     email: "Fanyoas@gmail.com",
    //     nohp: "081222333444"
    // },
    //     { $set: {
    //         nama: "Naurito",
    //         email: "Naurito@gmail.com",
    //         nohp: "081222453444"
    //     } });
    // console.log('Updated documents =>', updateResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());