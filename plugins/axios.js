export default function({ $axios }) {
    $axios.setHeader('Content-Type', 'application/json');
    $axios.setToken(process.env.API_TOKEN, 'Bearer');
}
