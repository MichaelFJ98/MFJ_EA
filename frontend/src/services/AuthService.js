import Cookies from 'js-cookie';

export function isAuthenticated(){
    if(Cookies.get("token")){
        return true;
    } else return false;
  }

export function signout(){
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    window.location.reload();
}