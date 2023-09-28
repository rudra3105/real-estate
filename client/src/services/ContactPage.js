import axios from 'axios'

const domain = "http://localhost:5173/";

export const sendMessage = async(payload)=>{
    try{
        const response = await axios.get(`${domain}/add-user`,payload);
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
