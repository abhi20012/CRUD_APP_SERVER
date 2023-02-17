import mongoose from 'mongoose';

const connectDB =  async (username, password) => {
	
	mongoose.set('strictQuery', false);
	const URL = `mongodb+srv://${username}:${password}@crud-app.ldm2wv0.mongodb.net/user_data?retryWrites=true&w=majority`;
	
	try {
      await mongoose.connect(URL ,{ });
		console.log("Database Connected");
  } catch (error) {
    console.log(`Error while connecting database ${error}`);
  }
}

export default connectDB;