import mongoose from "mongoose";

const ConnectToDB = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI);
        if (connection) {
            console.log(`Connected to the DataBase MongoDB : ${connection.host}`);
        }
    } catch (e) {
        console.log(e);
        process.exit(1)
    }
}

export default ConnectToDB;