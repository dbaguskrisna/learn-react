import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

export default function Customer(){
     const {id} = useParams();
     const navigate = useNavigate();
     const [customer, setCustomer] = useState();

     useEffect(() => {
          let url = "http://localhost:8000/api/customer/" + id;
          fetch(url)
          .then((response) => {
               if (response.status === 404){
                  navigate('/404');
               }
          })
          .then((data)=>{
               setCustomer(data);
          })
     }, []);
     

     return (
          <>
               {
                    customer ? <div>
                         <p>{customer.id}</p>
                         <p>{customer.name}</p>
                         <p>{customer.industry}</p>
                    </div> : "data not found"
               }
          </>
     );
}