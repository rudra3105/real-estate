import axios from 'axios'

const domain = "http://localhost:5173/";

export const getAboutPage = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "testimonial",
                sub_type : "testimonial"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
