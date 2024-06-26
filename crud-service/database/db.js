import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://project2:project2@cluster4.p6iczxw.mongodb.net/project2?retryWrites=true&w=majority&appName=Cluster4`

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;