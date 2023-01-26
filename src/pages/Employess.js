import { useState } from 'react';
import '../index.css';
import Employee from '../component/Employee';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from '../component/AddEmployee';
import EditEmployee from '../component/EditEmployee';
import Header from '../component/Header';

function Employees() {
  const [employees, setEmployee] = useState(
    [
      {
        id: 1,
        name: "Krisna", 
        role: "Developer",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        id: 2,
        name: "Caleb", 
        role: "Developer",
        img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 3,
        name: "Caleb", 
        role: "Developer",
        img: "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        name: "Caleb", 
        role: "Developer",
        img: "https://images.pexels.com/photos/1982852/pexels-photo-1982852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 5,
        name: "Caleb", 
        role: "Developer",
        img: "https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 6,
        name: "Caleb", 
        role: "Developer",
        img: "https://images.pexels.com/photos/4993292/pexels-photo-4993292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 7,
        name: "Caleb", 
        role: "Developer",
        img: "https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }
    ]
  )
  const showEmployees = true;

  function updateEmployee(id, newName, newRole){
    const updateEmployee = employees.map((employee) =>{
      //... is equal to spread component
      if(id == employee.id){
        return {...employee, name: newName, role: newRole};
      }
      return employee
    });

    setEmployee(updateEmployee);
  }

  function newEmployee(name, role, img){
    //Set new object
    const newEmployees = {
        id: uuidv4(), //Generate random number string character 
        name: name,
        role: role,
        img: img,
    };

    setEmployee([...employees, newEmployees]);
  }

  return (
    <div className="">
      {showEmployees ? 
        <>
          
          <div className='flex flex-wrap justify-center'>
            {
              employees.map((employee) => {
                //Passing component to props
                const editEmployee = (
                  <EditEmployee 
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    updateEmployee={updateEmployee}
                  />
                );
                

                return(
                  <Employee 
                    key = {employee.id}
                    id= {employee.id}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
                    editEmployee={editEmployee}
                  />
                )
                
              })
            }
          </div>
          <AddEmployee newEmployee={newEmployee}/>
        </>
        :
        <p>You cannot see the employee</p>
      }
    </div>
  );
}

export default Employees;
