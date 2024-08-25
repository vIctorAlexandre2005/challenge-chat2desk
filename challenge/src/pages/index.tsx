import { Contacts } from "@/Components/Contacts";
import { useContextGlobal } from "@/Context";

export default function Home() {

  const { isLogged } = useContextGlobal();

  return (
    <>
    {isLogged && (
      <Contacts />
    )}
    </>
  );
};