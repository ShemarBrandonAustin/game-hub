import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '7ec2c179db734eec88ddece2b0d98f7c'
    }
})