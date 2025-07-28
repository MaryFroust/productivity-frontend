import { jwtDecode } from "jwt-decode";
import { removeAuthToken } from "./attachHeaders";


const checkIfUserIsAuth = () => {
    
     const jwt = window.localStorage.getItem('proJwt')
     const currentUser = jwt ? jwtDecode(jwt) : null//making sure it exists before we decode
     if (currentUser && currentUser.exp > (Date.now() / 1000)) {
      return true
     }else{
      removeAuthToken()
        return false
     }

}
export default checkIfUserIsAuth