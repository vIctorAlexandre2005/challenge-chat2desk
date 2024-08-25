import { ContactsList } from "@/Components/Contacts";
import { Loader } from "@/Components/Loader";
import { useContextGlobal } from "@/Context";
import { PulseLoader } from "react-spinners";

export default function Home() {

  const { isLogged } = useContextGlobal();

  // If the user is logged in, render the list of contacts
  if (isLogged) {
    return <ContactsList />;
  } else {
    return <Loader />
  };
};
