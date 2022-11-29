const axios = require('axios');
require('dotenv').config();

const generate_image = async(req, res)=>{
    //Creates an images given a prompt
    const url_API= 'https://api.openai.com/v1/images/generations';
    const {prompt, number_images_generated} = req.body;
    try{
        const data = {
            prompt: prompt,
            n: number_images_generated,
            size: "512x512"
        };
        config = {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_KEY}`
            }
        }
        const response = await axios.post(url_API, data, config);
        res.set('Access-Control-Allow-Origin', '*'); 
        res.status(200).send(response.data);   
    }catch{
        res.set('Access-Control-Allow-Origin', '*'); 
        res.status(500).json({error_msg: 'Some error has occured'});
    } 
}

module.exports={
    generate_image,
}