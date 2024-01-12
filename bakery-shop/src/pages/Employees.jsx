import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { isEmail, isInt, isAlpha } from 'validator';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  // TODO: Load data from backend service
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(json => {
        setEmployees(json.data);
      })
  }, []);

  const addEmployee = () => {
    // TODO: Add validations
    if (idRef.current.value === "") {
      setMessage("ID required");
      return;
    }
    if (!isInt(idRef.current.value)) {
      setMessage("ID must be a number")
      return;
    }
    if (nameRef.current.value === "") {
      setMessage("Name required");
      return;
    }
    if (!isAlpha(nameRef.current.value.replace(" ", ""))) {
      setMessage("Name must include only letters");
      return;
    }
    if (emailRef.current.value === "") {
      setMessage("E-mail required");
      return;
    }
    if (!isEmail(emailRef.current.value)) {
      setMessage("Not a valid E-mail address");
      return;
    }
    if (avatarRef.current.value === "") {
      setMessage("Avatar image link required");
      return;
    }
    // TODO: Add an employee to the table
    employees.push({
      "id": idRef.current.value,
      "first_name": nameRef.current.value.split(" ")[0],
      "last_name": nameRef.current.value.split(" ")[1] || "",
      "email": emailRef.current.value,
      "avatar": avatarRef.current.value
    })
    setEmployees(employees.slice());
    idRef.current.value = ""
    nameRef.current.value = ""
    emailRef.current.value = ""
    avatarRef.current.value = ""
  }

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
    employees.splice(index, 1);
    setEmployees(employees.slice());
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee, index) => 
          <tr key={employee.email}>
            <td>{employee.id}</td>
            <td>{employee.first_name} {employee.last_name}</td>
            <td>{employee.email}</td>
            <td><img src={employee.avatar} alt="avatar" width="128" height="128"/></td>
            <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
          </tr>
        )}

        <tr className="input-row">
          <td><input type="text" placeholder="ID" className="form-control" ref={idRef}/></td>
          <td><input type="text" placeholder="Name" className="form-control" ref={nameRef}/></td>
          <td><input type="text" placeholder="Email" className="form-control" ref={emailRef}/></td>
          <td><input type="text" placeholder="Avatar" className="form-control" ref={avatarRef}/></td>
          <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
        </tr>
        </tbody>
      </Table>
      <div>{message}</div>
    </div>

  </div>)
}

export default Employees;