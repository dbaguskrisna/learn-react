import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefinitionSearch from "../component/DefinitionSearch";
export default function Dictionary(){
    return (
     <div className="flex justify-center">
          <DefinitionSearch/>
     </div>
    );
   
}