import { NavBar } from "./nav-bar";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

export const Header = () => {
    return (
        <header className="flex h-20 p-6 bg-white w-screen items-center">
            <NavBar />

          
            <div className="flex items-center ml-auto space-x-4">
               
                <button className="flex items-center justify-center p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <Plus size={24} />
                </button>

               
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <input 
                        type="text" 
                        placeholder="pesquisar usuario..." 
                        className="p-2 w-96 border-none focus:outline-none" 
                    />
                    <button className="p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none">
                        <MagnifyingGlass size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};
