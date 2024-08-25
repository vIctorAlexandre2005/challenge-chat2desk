import React, { useState } from "react";
import { InputComponent } from "../InputComponent";
import { useContextGlobal } from "@/Context";
import { useRouter } from "next/router";
import { validateCredentials } from "@/utils/auth";
import { toastError, toastSuccess } from "@/utils/toasts";

export function LoginComponent() {

    const [nameUser, setNameUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setIsLogged } = useContextGlobal();

    const router = useRouter();

    function handleOnChangeNameUser(e: React.ChangeEvent<HTMLInputElement>) {
        setNameUser(e.target.value);
    };

    function handleOnChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const nameUserEmpty = nameUser.trim() === '';
        const passwordEmpty = password.trim() === '';

        if(nameUserEmpty || passwordEmpty) {
            toastError('Preencha todos os campos');
            return
        };
    
        if (validateCredentials(nameUser, password)) {
          localStorage.setItem('isLoggedIn', 'true');
          setIsLogged(true);
          toastSuccess('Login efetuado com sucesso!');
          router.push('/');
        } else {
          alert('Credenciais inválidas');
        };
      };
    

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-center mb-6 text-2xl font-semibold">Bem-vindo!</h3>
            <div className="bg-white p-4 shadow-2xl">
                <h3 className="text-center mb-6 text-xl">Faça login</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <InputComponent
                            value={nameUser}
                            onChange={handleOnChangeNameUser}
                            title="Usuário"
                            placeholder="testchallenge"
                            type="text"
                        />
                        <InputComponent
                            title="Senha"
                            onChange={handleOnChangePassword}
                            placeholder="123456"
                            type="password"
                            value={password}
                        />
                        <p className="text-sm">Veja <a href="" className="text-neon-500 font-semibold underline">aqui</a> o nome de usuário e a senha de acesso</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 rounded-lg 
                        font-semibold text-white hover:bg-neon-600 transition duration-300 
                        bg-neon-500 focus:outline-none hover:font-semibold
                        "
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
