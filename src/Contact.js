import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Contact = ({ accessContact }) => {
  const history = useHistory();
  useEffect(() => {
    if (!accessContact) {
      history.push("/");
    }
  }, [accessContact, history]);
  return (
    <div className="h-20 p-20 flex items-center justify-center font-bold text-3xl text-blue-500 border border-blue-500">
      <div>Contact Page</div>
    </div>
  );
};

export default Contact;
