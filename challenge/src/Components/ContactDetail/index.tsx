import { useRouter } from "next/router";
import { useContextGlobal } from "@/Context";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { IoArrowBackCircle } from "react-icons/io5";
import { DetailsComponent } from "./Details/details";

/**
 * Componente que exibe os detalhes de um contato
 */
export function ContactDetailsComponent() {
  const router = useRouter();
  const { id } = router.query;
  const { users } = useContextGlobal();
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  const details = [
    { title: "Email", value: selectedUser?.email },
    { title: "Telefone", value: selectedUser?.phone },
    { title: "Website", value: selectedUser?.website },
    { title: "Endereço", value: `${selectedUser?.address?.street}, ${selectedUser?.address?.suite}, ${selectedUser?.address?.city}, ${selectedUser?.address?.zipcode}` },
    { title: "Empresa", value: selectedUser?.company?.name },
    { title: "Slogan", value: selectedUser?.company?.catchPhrase },
  ];

  /**
   * Função que procura o contato com o ID especificado
   * e seta o estado para o contato encontrado
   */
  useEffect(() => {
    if (id && users?.length) {
      const foundUser = users.find((user) => user.id === Number(id));
      setSelectedUser(foundUser);
    };
  }, [id, users]);

  /**
   * Renderiza o componente de loading se o contato
   * não foi encontrado
   */
  if (!selectedUser) {
    return <Loader />;
  };

  return (
    <div className="flex flex-col justify-center xs:p-0 sm:p-10">
      <h3 className="text-xl font-medium mb-4">Detalhes do Usuário</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-8">
          <a href="/" className="underline flex gap-1 items-center text-sm hover:text-neon-500 transition duration-200">
          <IoArrowBackCircle size={24} />
            Voltar a tela inicial
          </a>
        </div>
        <div>
      <img
        src={selectedUser.photo}
        alt={selectedUser.name}
        className="rounded-full h-20"
      />
      <h4 className="text-2xl font-semibold mb-4">{selectedUser.name}</h4>
      {details.map((detail) => (
        <DetailsComponent 
          key={detail.title} 
          title={detail.title} 
          value={detail.value} 
        />
      ))}
    </div>
      </div>
    </div>
  );
};
