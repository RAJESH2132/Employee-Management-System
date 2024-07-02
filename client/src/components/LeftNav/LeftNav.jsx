import React, { useEffect, useState } from "react";
import { axiosGet } from "../../axiosServices";
import "./LeftNav.css";

const LeftNav = ({ employeeId }) => {
  const [empById, setEmpById] = useState([]);

  const getEmployeeById = async () => {
    try {
      const res = await axiosGet(`/employee/${employeeId}`);
      setEmpById(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmployeeById();
  }, [employeeId]);
  return (
    <nav className="leftNav">
      <div className="employeeDetail">
        <h2>Full Detail</h2>
        <img src={empById.image} alt="broken" />
        <h1>
          {empById.firstname} {empById.lastname}
        </h1>
        <p>{empById.email}</p>
        <p>{empById.phone}</p>
        <p>{empById.job}</p>
        <p className="date">{empById.dateofjoining}</p>
      </div>
    </nav>
  );
};

export default LeftNav;
