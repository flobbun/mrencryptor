const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost/mrencryptor';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));