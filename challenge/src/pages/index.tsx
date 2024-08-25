import { ContactsList } from "@/Components/Contacts";
import { useContextGlobal } from "@/Context";

export default function Home() {

  const { isLogged } = useContextGlobal();

  if (isLogged) {
    return <ContactsList />
  };
};