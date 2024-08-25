import { useRouter } from "next/router";
import { useContextGlobal } from "@/Context";
import { useEffect, useState } from "react";

/**
 * Componente que exibe os detalhes de um contato
 */
export function ContactDetailsComponent() {
  const router = useRouter();
  const { id } = router.query;
  const { users } = useContextGlobal();
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

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
    return <div>Loading...</div>;
  };

  return (
    <div className="flex flex-col justify-center p-10">
      <h3 className="text-xl font-medium mb-4">Detalhes do Usuário</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-8">
          <a href="/" className="underline text-sm hover:text-neon-500 transition duration-200">
            Voltar a tela inicial
          </a>
        </div>
        <img
          src={selectedUser.photo}
          alt={selectedUser.name}
          className="rounded-full h-20 mb-4"
        />
        <h4 className="text-2xl font-semibold mb-4">{selectedUser.name}</h4>
        <p>
          <strong>Email:</strong> {selectedUser.email}
        </p>
        <p>
          <strong>Telefone:</strong> {selectedUser.phone}
        </p>
        <p>
          <strong>Website:</strong> {selectedUser.website}
        </p>
        <p>
          <strong>Endereço: </strong>
          {`
            ${selectedUser.address.street},
            ${selectedUser.address.suite},
            ${selectedUser.address.city},
            ${selectedUser.address.zipcode}
          `}
        </p>
        <p>
          <strong>Empresa:</strong> {selectedUser.company.name}
        </p>
        <p>
          <strong>Slogan:</strong> {selectedUser.company.catchPhrase}
        </p>
      </div>
    </div>
  );
};
