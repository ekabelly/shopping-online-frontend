import axios from 'axios';

const serverUri = `http://localhost:4001`

const login = async (email, pass) => {
    const res = await axios.post(`${serverUri}/login`, {email, pass});
    return res;
}

const logout = async () => {
    const res = await axios.get(`${serverUri}/logout`);
    return res;
}

export default { login, logout };