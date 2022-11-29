const axios = require('axios');
//const { response } = require('express');
require('dotenv').config();

const text_moderation = async(req, res)=>{
    // Given a input text, outputs if the model classifies it as violating OpenAI's content policy.
    const url_API= 'https://api.openai.com/v1/moderations';
    const {prompt} = req.body;
    try{
        const config ={
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_KEY}`
            }
        }
        const response = await axios.post(url_API, {"input":prompt}, config);
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Headers','*');
        res.set('Access-Control-Allow-Methods', '*');
        res.set('Access-Control-Allow-Credentials', 'true');
        res.status(200).send(response.data);      
    }catch(error){
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Headers','*');
        res.set('Access-Control-Allow-Credentials', 'true');
        res.set('Access-Control-Allow-Methods', '*');
        res.status(500).json({error_msg: 'Some error has occured here'});
    } 
}

module.exports={
    text_moderation
}