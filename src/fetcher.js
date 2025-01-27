import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data  
    } catch (error) {
        throw error
    }
}