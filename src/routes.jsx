import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Formulario } from "./pages/formulario"
import { Sinup } from "./components/user-cadast/sigup"
import { Login } from "./components/user-cadast/login"
import { PasswordReset } from "./components/user-cadast/resetpassword"
import { GetAllUsers } from "./components/user-cadast/users"


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
   
   
    {
      path: "/formulario",
      element: <Formulario />,
    },

    {
      path: "/sigup",
      element: <Sinup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/resetpassword",
      element: <PasswordReset />,
    },
    {
      path: "/users",
      element: <GetAllUsers />,
    }

]
)