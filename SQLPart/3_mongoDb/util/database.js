const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://aysenurulku17_db_user:pBRUOaJ34DuK8eSQ@cluster0.odqszfp.mongodb.net/?appName=Cluster0')
   .then(client => {
    console.log('Connected');
    callback(client);
    })
   .catch(err => {
    console.log(err);
   });
}

module.exports = mongoConnect;
