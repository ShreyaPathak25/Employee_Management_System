import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditEmployee = ({ employees, updateEmp }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentEmployee = employees.find(
    (emp) => emp.id === parseInt(id)
  );

  useEffect(() => {
    setFname(currentEmployee.fname);
    setLname(currentEmployee.lname);
    setDesignation(currentEmployee.designation);
    setBirth(currentEmployee.birth);
    setExperience(currentEmployee.experience);
    setCity(currentEmployee.city);
    setAddress(currentEmployee.address);
  }, [currentEmployee]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [birth, setBirth] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !birth || !designation || !experience || !city || !address) {
      return toast.warning("Please fill all the fields!!");
    }

    const data = {
      id: currentEmployee.id,
      fname,
      lname,
      birth,
      designation,
      experience,
      city,
      address
    };
 console.log(data)
    updateEmp(data);
    toast.success("Employee details updated successfully!!");
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
        <div className="col-md-6 mx-auto shadow p-5">
          {currentEmployee ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={fname}
                  placeholder={"First Name"}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={lname}
                  placeholder={"Last Name"}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={birth}
                  placeholder={"Birth"}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={designation}
                  placeholder={"Designation"}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={experience}
                  placeholder={"Experience"}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={city}
                  placeholder={"City"}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={address}
                  placeholder={"Address"}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Employee
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Record Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateEmp: (data) => {
    dispatch({ type: "UPDATE_EMPLOYEE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
