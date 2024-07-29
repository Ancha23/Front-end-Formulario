import { NavLink } from "react-router-dom";

const activeStyles = "text-black/40 font-bold";
const inactiveStyles = "text-black font-bold";
export const NavBar = () => {
  return (
    <nav className=" flex space-x-8 justify-end">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
     Home
      
      </NavLink>
     
      <NavLink
        to={"/formulario"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Formulario de Cadastro
      </NavLink>

      <NavLink
        to={"/users"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Todos Usuarios
      </NavLink>
      
      
      
    </nav>
  );
};
