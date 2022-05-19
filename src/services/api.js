import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com/';

const getProducts = async () => {
    const response = await axios.get('/products');
    return response.data;
}

const getProductDetail = async (productId) => {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
}

export {
    getProducts,
    getProductDetail,
}