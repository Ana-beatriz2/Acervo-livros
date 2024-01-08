import mongoose from "mongoose";

async function connectDatabase() {
    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.DB_STRING_CONNECTION);
    return mongoose.connection;
}

export default connectDatabase;