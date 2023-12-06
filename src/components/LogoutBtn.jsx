import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
import {useNavigate} from 'react-router-dom'

import {
    MdOutlineLogout,
  } from "../icons";
export default function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

    return(
        <button 
        onClick={logoutHandler}
        className=''
        ><MdOutlineLogout className="text-[#6EEB83] text-2xl md:text-4xl " /></button>
    )

}