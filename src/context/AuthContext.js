import {createContext,useState} from "react";
//create a context
export const AuthContext=createContext();

const AuthProvider = ({children}) => {
  //create a state to store the logged in information
  const[user,setUser]=useState(null);

  //function to login the user
  const login=(name)=>{
    setUser(name);
  }

  //function to logout the user
  const logout=()=>{
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}  
        {/* All children component can access */}
    </AuthContext.Provider>
  )
}

export default AuthProvider