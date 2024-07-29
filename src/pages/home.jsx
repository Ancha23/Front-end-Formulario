import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center h-full overflow-hidden">
                <div className="flex items-center justify-center w-full flex-1">
                    {/* Container para o GIF e o título */}
                    <div className="relative flex items-center justify-center w-full h-full">
                        {/* Imagem de fundo */}
                        <img 
                            src="https://i.gifer.com/origin/f9/f9b137524188e4fb05d678dbb8b8dfc1_w200.webp" 
                            alt="SEJA BEM VINDO!" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40" 
                        />
                        {/* Título */}
                        <h1 className="relative z-10 text-white text-3xl font-bold">Seja bem-vindo ao meu site!</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full flex-1">
                    {/* Botão centralizado */}
                    <Link to="/formulario">
                        <button className="bg-white w-40 h-10 text-black rounded-lg font-bold">Cadastrar-me</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
