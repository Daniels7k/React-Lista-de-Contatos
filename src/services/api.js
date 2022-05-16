import axios from "axios";

const api = axios.create({
    baseURL: "https://express-react-lista-de-contato.herokuapp.com/"
})

export default api