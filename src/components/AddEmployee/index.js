import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";


const AddEmployee = ({ employees, addEmployees }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [birth, setBirth] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();    

    if (!fname || !lname || !birth || !designation || !experience || !city || !address) {
      return toast.warning("Please fill all the fields!!");
    }
   
    const data = {
      id: employees.length > 0 ? employees[employees.length - 1].id + 1 : 0,
      fname,
      lname,
      birth,
      designation,
      experience,
      city,
      address
    };

    addEmployees(data);
    toast.success("Employee details are added successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
       <div className="row d-flex flex-column">
      <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Home
        </button>
      <h1 className="text-center text-dark py-3 display-3">Add New Employee</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="date"
                placeholder="Birth"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Employee"
              />
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state,
});
const mapDispatchToProps = (dispatch) => ({
  addEmployees: (data) => {
    dispatch({ type: "ADD_EMPLOYEE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
