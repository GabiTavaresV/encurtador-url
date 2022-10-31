import mongoose from "mongoose";

class Database {
    db: mongoose.Mongoose;
    password: String = '1234';

    constructor() {
        mongoose.connect('mongodb+srv://mongo:mongo123@cluster0.fkarr.mongodb.net/?retryWrites=true&w=majority')
            .then(ret => console.info.bind(console, ret))
            .catch(error => console.error.bind(console, error));
        this.db = mongoose
    };
}

export default Database;