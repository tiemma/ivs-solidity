let db = (mongoose) => {

  //Set up default mongoose connection
  let DATABASE = process.env.MONGO_URL + process.env.MONGO_DB;

  mongoose.connect(DATABASE);

  // Get Mongoose to use the global promise library
  mongoose.Promise = global.Promise;

  //Get the default connection
  let db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  return db;
};

module.exports = db;
