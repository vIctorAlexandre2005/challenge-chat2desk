import { ContactsList } from "@/Components/Contacts";
import { useContextGlobal } from "@/Context";

export default function Home() {

  const { isLogged } = useContextGlobal();

  // If the user is logged in, render the list of contacts
  if (isLogged) {
    return <ContactsList />;
  };

  // If the user is not logged in, render the login page
  return <></>;
};
