import { ContactDetailsComponent } from "@/Components/ContactDetail";
import { useContextGlobal } from "@/Context";

export default function ContactDetailsPage() {
  const { isLogged } = useContextGlobal();

  if(isLogged) {
    return <ContactDetailsComponent />
  }
};