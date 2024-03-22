
import { createContext, useContext, useMemo } from "react"
import axios from 'axios';
import { useCookies } from 'react-cookie';


const AppContext = createContext();

const UserProvider = ({children}) => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const logIn = async (formData) => {
        let res = await axios({
            method: 'POST',
            url: 'https://jwt-verificationbe.onrender.com/api/auth/login',
            data: formData

        })
        setCookie('token', res.data.token)
    }

    const signUp = async (formData) => {
        let res = await axios({
            method: 'POST',
            url: 'https://jwt-verificationbe.onrender.com/api/users',
            data: formData

        })
        console.log(res.data)
        setCookie('token', res.data.token)
    }

    const logOut  = ()=>{
        ['token'].forEach((obj)=>{removeCookie(obj)});
    }

    //do not rerender if cookies doesn't change
    const value = useMemo(()=>({cookies, logIn, logOut, signUp}), [cookies])

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

const useAuth = ()=>{
    return useContext(AppContext);
}

export {UserProvider, useAuth}