import axios from 'axios';


const axiosWithAuth = () => {
    //const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
           
            "Authorization": localStorage.getItem('token')
        },
    });
};

export default axiosWithAuth;