import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';

export default function Customers() {

     const [customer, setCustomer] = useState();

     useEffect(() => {
          fetch('http://localhost:8000/api/customer')
          .then((response) => response.json())
          .then((data)=>{
               setCustomer(data);
          })
     }, []);

     return (
        <>
           <h1>Here are our customers</h1>
           {customer ? customer.map((customer)=>{
               return (
                    <ul>
                         <li>
                              <Link to={"/customers/" + customer.id}>{customer.name}</Link>
                         </li>
                    </ul>
               ) 
           }) : "data is empty"}
        </>
     )
}