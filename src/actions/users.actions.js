import usersService from '../services/users-service';

const login = (email, pass) => async dispatch => {
    const res = await usersService.login(email, pass);
    dispatch({ type: 'LOGIN', payload: res.data });
}

const logout = (email, pass) => async dispatch => {
    const res = await usersService.login(email, pass);
    dispatch({ type: 'LOGIN', payload: res.data });
}

export default {
    login,
    logout
}