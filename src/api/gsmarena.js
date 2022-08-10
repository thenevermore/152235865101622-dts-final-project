import axios from 'axios';

const baseURL = 'https://api-mobilespecs.azharimm.site/v2/latest';
const localURL = 'http://localhost:3000/data.json';
const baseDetail = 'http://api-mobilespecs.azharimm.site/v2/';

const gsmdb = axios.create({
    baseURL: baseURL,
})

const localdb = axios.create({
    localURL: localURL,
})

const detailgsmdb = axios.create({
    baseURL: baseDetail
})

export { gsmdb,detailgsmdb,localdb };