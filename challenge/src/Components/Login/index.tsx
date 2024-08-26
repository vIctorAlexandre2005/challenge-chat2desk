import React, { useState } from "react";
import { InputComponent } from "../InputComponent";
import { useContextGlobal } from "@/Context";
import { useRouter } from "next/router";
import { validateCredentials } from "@/utils/auth";
import { toastError, toastSuccess } from "@/utils/toasts";
import { FadeInWithScale } from "../effects/Fade-InWithScale";
import { BiSolidLogIn } from "react-icons/bi";

/**
 * Componente responsável por renderizar a tela de login
 */
export function LoginComponent() {
  /**
   * Estado para armazenar o nome de usuário digitado pelo usuário
   */
  const [username, setUsername] = useState('');
  /**
   * Estado para armazenar a senha digitada pelo usuário
   */
  const [password, setPassword] = useState('');

  /**
   * Contexto global que armazena se o usuário está logado ou não
   */
  const { setIsLogged } = useContextGlobal();
  /**
   * Hook para navegar entre rotas
   */
  const router = useRouter();

  /**
   * Função que muda o estado do nome de usuário quando o usuário digita algo
   * @param event Evento de mudança de valor
   */
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  /**
   * Função que muda o estado da senha quando o usuário digita algo
   * @param event Evento de mudança de valor
   */
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  /**
   * Função que é chamada quando o formulário é submetido
   * @param event Evento de submissão do formulário
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /**
     * Verifica se o nome de usuário e a senha foram digitados e
     * se a senha é válida
     */
    if (!username.trim() || !password.trim()) {
      toastError('Por favor, preencha todos os campos');
      return;
    }

    if (validateCredentials(username, password)) {
      localStorage.setItem('isLogged', 'true');
      setIsLogged(true);
      toastSuccess('Login efetuado com sucesso!');
      router.push('/');
    } else {
      toastError('Credenciais inválidas');
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h3 className="animate-float text-center mb-6 text-3xl text-neon-500 font-semibold">Bem-vindo!</h3>
      <FadeInWithScale>
        <div className="bg-white p-4 shadow-2xl">
          <h3 className="text-center justify-center font-semibold mb-6 text-xl flex gap-2 items-center">
            Faça login <BiSolidLogIn size={24} />
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <InputComponent
                value={username}
                onChange={handleUsernameChange}
                title="Usu rio"
                placeholder="chat2desk"
                type="text"
              />
              <InputComponent
                title="Senha"
                onChange={handlePasswordChange}
                placeholder="password123"
                type="password"
                value={password}
              />
              <p className="text-sm mt-4">
                Veja <a 
                    href="https://github.com/vIctorAlexandre2005" 
                    target="_blank"
                    className="text-neon-500 font-semibold hover:underline">aqui </a> o nome de usu rio e a senha de acesso </p>
            </div>
            <button
              type="submit"
              className="w-full p-2 rounded-lg font-semibold text-white hover:bg-neon-600 transition duration-300 bg-neon-500 focus:outline-none hover:font-semibold"
            >
              Entrar
            </button>
          </form>
        </div>
      </FadeInWithScale>
    </div>
  );
}
