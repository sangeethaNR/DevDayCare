// components/AppContext.js
import { useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import Auth from "../utils/auth";
import { GET_CLASS_INFO } from "../utils/queries";
export const AppContext = React.createContext();
export const useDashboard = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [isTeacher, setIsTeacher] = useState(false);
  const user_details = Auth.getProfile()?.data;
  const { data, refetch } = useQuery(GET_CLASS_INFO, {
    variables: {
      teacherId: user_details?._id,
    },
  });
  const classInfo = data?.getClassRoom || [];
  const handleDashboardView = () => {
    console.log("inside toggle theme");
    return setIsTeacher((prev) => !prev);
  };

  const value = {
    isTeacher,
    handleDashboardView,
    user_details,
    classInfo,
    refetch
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default UserProvider;
