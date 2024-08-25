import { LoginComponent } from "@/Components/Login";
import { IsLogged } from "@/Components/isLogged";
import { useContextGlobal } from "@/Context";

export default function Login() {

    const { isLogin } = useContextGlobal();

    if (isLogin) {
        return <IsLogged />
    } else {
        return <LoginComponent />
    }
}