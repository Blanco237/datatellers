import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "./../../../hooks/useUser";

const Guard = ({ element }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default Guard;
