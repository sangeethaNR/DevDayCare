// components/AppContext.js
import React,{ useState,useContext }from "react";
export const AppContext = React.createContext();
export const useDashboard = () => useContext(AppContext);
const UserProvider = ({ children }) => {
    const [isTeacher, setIsTeacher] = useState(false);
    const handleDashboardView = () => {
      console.log('inside toggle theme');
      return setIsTeacher((prev) => !prev);
    }
  
    const value = {
      isTeacher,
      handleDashboardView,
    }
    return (
      <AppContext.Provider value={{ isTeacher, setIsTeacher }}>
      {children}
      </AppContext.Provider>
    );
  };
  
  export default UserProvider;
  