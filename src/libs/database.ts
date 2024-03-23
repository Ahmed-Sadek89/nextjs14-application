import mongoose from "mongoose"

const connection: { isConnected: boolean } = { isConnected: false };

export const connectToDb = async () => {
  console.log('start connecting...')
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.DB_CONNECTION || '');
    connection.isConnected = db.connections[0].readyState === 1;
    console.log('connection success')
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};