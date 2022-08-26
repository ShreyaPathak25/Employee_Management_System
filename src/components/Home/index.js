import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ employees, deleteEmployee }) => {
  console.log(employees)
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Employee
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Designation</th>
                <th scope="col">Experience</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{emp.fname}</td>
                    <td>{emp.lname}</td>
                    <td style={{width:"120px"}}>{emp.birth}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.experience}</td>
                    <td>{emp.city}</td>
                    <td style={{width:"150px"}}>{emp.address}</td>                  
                    <td style={{width:"150px"}}>
                      <Link
                        to={`/edit/${emp.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteEmployee(emp.id)}
                        className="btn btn-sm btn-danger mr-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No Record found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEmployee: (id) => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
