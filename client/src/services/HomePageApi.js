import axios from 'axios'

const domain = "http://localhost:5173/";

export const getHomeSlider = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "slider"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}


export const getAbout = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "about"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getPortfolio = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "portfolio"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getService = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "services"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getTestimonial = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "testimonials"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getDataCredentials = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "dataCredentials"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}

export const getGallery = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "home",
                sub_type : "gallery"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
