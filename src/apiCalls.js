import { userRequest } from './requestMethod'


export const loginCall = async (userCredential, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const res = await userRequest.post("/auth/login", userCredential)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error})
    }
}