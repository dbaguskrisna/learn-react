import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function DefinitionSearch(){
    //Use state is used to change state in react JS
     //State is a object to save data in react and will be rendered when have a change
     const [word, setWord] = useState("");
     const navigate = useNavigate();

     //Use effect = Allows some effect when every state changes
     // useEffect(() => {
     //      console.log("State Updated ", word);
     // }, [word]);

     // useEffect(() => {
     //      console.log("State Updated ", word2);
     // }, [word2]);

     return (
          <form className="flex space-between space-x-2 max-w-[300px]"
               onSubmit={() => {
               navigate('/dictionary/' + word)
          }}>
               <input className="shrink min-w-0 px-2 py-1 rounded" placeholder="Dinosaur" type="text" onChange={(e) => {
                    setWord(e.target.value);
               }}/>
               <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
                    Search
               </button>
          </form>
     )
}