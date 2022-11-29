const axios = require('axios');
require('dotenv').config();

const request_completion = async (req, res)=>{
    //Creates a completion for the provided prompt and parameters
    const url_API= 'https://api.openai.com/v1/completions';
    const {prompt, max_tokens, temperature, number_of_results} = req.body;
    try{
        data = {
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens: max_tokens,
            temperature: temperature,
            n: number_of_results
        },
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
const request_edit= async (req, res)=>{
    //Creates a new edit for the provided input, instruction, and parameters
    // The instruction tells the model what to do with the text eg fix the spelling mistakes
    const url_API= 'https://api.openai.com/v1/edits';
    const {prompt,temperature, instruction, number_of_results} = req.body;
    try{
        data = {
            model: "text-davinci-edit-001",
            input: prompt,
            temperature: temperature,
            n: number_of_results,
            instruction: instruction
        }
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
    request_completion,
    request_edit,
}