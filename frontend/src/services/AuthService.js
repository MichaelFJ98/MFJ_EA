import Cookies from 'js-cookie';
//function that checks the users'authentication through looking at the cookieslist(look if a jwt is added in cookieslist)
export function isAuthenticated(){
    if(Cookies.get("token")){
        return true;
    } else return false;
  }

//removes the jwt cookies and reloads the page which will automatically singout the user.
export function signout(){
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    window.location.reload();
}