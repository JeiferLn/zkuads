import axios from 'axios';
import { cookies } from 'next/headers';

const  axiosTokenSSR = ()  => {
    const auth = cookies().get('access_token')?.value;
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Autorization': `Bearer ${auth}`
        },
        timeout: 5000
    });
}


export default axiosTokenSSR;