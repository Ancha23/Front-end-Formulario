import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Smiley } from "@phosphor-icons/react";

export const App = () => {
  
  return(
    
    <div className="flex w-full h-screen bg-black text-white"> 
   
      <div>
        
         <RouterProvider router={routes} />
        
        
   
    </div>
    </div>
  
  )
  
}



