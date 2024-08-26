import { LoginComponent } from "@/Components/Login";
import { IsLogged } from "@/Components/isLogged";
import { useContextGlobal } from "@/Context";

export default function Login() {

    const { isLogged } = useContextGlobal();

    if (isLogged) {
        return <IsLogged />
    } else {
        return <LoginComponent />
    }
}