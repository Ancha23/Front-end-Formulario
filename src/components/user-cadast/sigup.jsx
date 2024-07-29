import { useState } from "react";
import { Envelope, Lock, UserCheck } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { GetAllUsers } from "./users"; 
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Sinup = () => {
  const [formData, setFormData] = useState(null); 
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    setFormData(data); 
  };

  return (
    <>
    <Header/>
      <div className="w-[1200px] h-[700px] flex mx-auto m-14 ml-80">
        <div className="w-full h-full flex flex-col items-center justify-center bg-white border border-sky-blue-100">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-2 uppercase">
            Formulário para Cadastro de Utilizador
          </h2>
          <div className="max-w-md w-full px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="mt-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome completo
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", {
                      required: "Nome completo é obrigatório!",
                      minLength: {
                        value: 2,
                        message:
                          "Nome completo deve ter no mínimo 2 caracteres!",
                      },
                    })}
                    placeholder="Nome completo"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <UserCheck
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.fullName && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Endereço de email */}
              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Endereço de email
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email é obrigatório!",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Endereço de email inválido!",
                      },
                    })}
                    placeholder="Endereço de Email"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Envelope
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.email && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Password é obrigatória!",
                      minLength: {
                        value: 8,
                        message: "Password deve ter no mínimo 8 caracteres!",
                      },
                    })}
                    placeholder="Escolha a sua Password"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Lock
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.password && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Confirmar Password */}
              <div className="mt-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirmar Password
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Confirmação de senha é obrigatória!",
                      validate: (value) =>
                        value === watch("password") ||
                        "As passwords não correspondem!",
                    })}
                    placeholder="Confirma a sua Senha"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Lock
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.confirmPassword && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-sky-blue-200 px-2 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue-200 uppercase"
              >
                Criar Conta
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-500">
              <span className="text-sm font-medium leading-6 text-gray-900 mr-2">
                Já tens uma conta?
              </span>
              <Link
                to="/login"
                className="font-semibold leading-6 text-sky-blue-200 hover:text-orange transition-colors duration-200 underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Exibição dos dados em tabela */}
      {formData && <GetAllUsers data={formData} />}
      <Footer/>
    </>
  );
};
