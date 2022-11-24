const express= require ('express');
const { text_moderation } = require('./controllers/text_moderation');
const {generate_image} = require('./controllers/image_generation');
const text_completion = require('./routes/text_completion');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/text', text_completion);
app.post('/moderation', text_moderation);
app.post('/image',generate_image);

app.listen(process.env.PORT||5000, ()=>{
    console.log(`Server listening on port ${process.env.PORT||5000}`);
})