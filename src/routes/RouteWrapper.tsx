import React from 'react'; 
import { Route, Redirect } from 'react-router-dom';  
// import { useSelector } from 'react-redux';
// import { isSignedInSelector } from '../store/auth/auth-selectors';

interface RouteWrapperProps {
  component: React.ComponentType<any>;
  exact?: boolean;
  isPrivate?: boolean;
  path: string;
  routeProps?: { [p:string]: any };
}

const RouteWrapper = ({
  component: Component,
  exact,
  isPrivate,
  path,
  routeProps,
}: RouteWrapperProps) => {   

  // const isSignedIn = useSelector(isSignedInSelector);
  /**    
  * Redirect user to SignIn page if he tries to access a private      route
  * without authentication.    
  */   
  // if (isPrivate && !isSignedIn) {     
  //   return <Redirect to="/sign-in" />;   
  // }    

  /**    
  * Redirect user to Main page if he tries to access a non private route    
  * (SignIn or SignUp) after being authenticated.    
  */   
  // if (!isPrivate && isSignedIn) {     
  //   return <Redirect to="/" />;   
  // }    
  
  /**    
  * If not included on both previous cases, redirect user to the desired route.    
  */   
  return <Route {...routeProps} component={Component} path={path} exact={exact} />; 
}

export default RouteWrapper;
