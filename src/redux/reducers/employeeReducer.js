const initialState = [
  { id: 0, fname: "Raman", lname: "Sharma", birth: "2019-03-04", designation: "engineer", experience: "2", city: "Pune", address: "Shaniwar Peth" },
  { id: 1, fname: "Lolita", lname: "Simpson", birth: "1990-04-04", designation: "engineer", experience: "8", city: "Danbury", address: "Ryan Building Lane 44" },
  { id: 2, fname: "Rahman", lname: "Shah", birth: "1988-05-08", designation: "engineer", experience: "10", city: "Milford", address: "Beach town" }

];

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      state = [...state, action.payload];
      return state;
    case "DELETE_EMPLOYEE":
      const empFilter = state.filter((emp) =>
        emp.id === action.payload ? null : emp
      );
      state = empFilter;
      return state;
    case "UPDATE_EMPLOYEE":
      const empUpdate = state.filter((emp) =>
        emp.id === action.payload.id
          ? Object.assign(emp, action.payload)
          : emp
      );
      state = empUpdate;
      return state;    
    default:
      return state;
  }
};
