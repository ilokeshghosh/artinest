import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice'
import {useNavigate} from 'react-router-dom'
import { updateStatus, clearStatus } from "../store/statusSlice";

import {
    MdOutlineLogout,
  } from "../icons";
export default function LogoutBtn(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
            dispatch(updateStatus({ text: "Logged Out", error: false }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 2000);
            navigate('/login')
        }).catch(error=>{
            dispatch(updateStatus({ text: error.message, error: true }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 3000)
        })
    }

    return(
        <button 
        onClick={logoutHandler}
        className=''
        ><MdOutlineLogout className="text-[#6EEB83] text-2xl md:text-4xl " /></button>
    )

}