import { useContextGlobal } from "@/Context";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * Componente que lista os contatos e permite navegação entre as páginas de contatos.
 */
export function ContactsList() {
  const { users } = useContextGlobal(); // Contexto que armazena a lista de contatos
  const router = useRouter(); // Roteador do Next.js
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const contactsPerPage = 5; // Número de contatos por página

  const totalPages = Math.ceil(users?.length / contactsPerPage); // Total de páginas
  const startIndex = (currentPage - 1) * contactsPerPage; // Índice do primeiro contato da página atual
  const endIndex = startIndex + contactsPerPage; // Índice do último contato da página atual
  const currentUsers = users?.slice(startIndex, endIndex); // Contatos da página atual

  /**
   * Função que muda a página atual
   * @param {number} newPage - Nova página
   */
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  /**
   * Função que redireciona para a página de detalhes do contato
   * @param {number} userId - ID do contato
   */
  const handleUserClick = (userId: number) => {
    router.push(`/user/${userId}`);
  };

  return (
    <div className="flex flex-col justify-center w-full p-10">
      <h3 className="text-xl font-medium mb-4">Meus contatos ({users?.length})</h3>
      <div className="w-full">
        <table className="min-w-full bg-white shadow-md text-center h-4/5 rounded-xl overflow-hidden">
          <thead className="bg-neon-500">
            <tr className="text-center">
              <th className="py-3 px-4 text-neon-50 font-bold">Nome</th>
              <th className="py-3 px-4 text-neon-50 font-bold">Email</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers?.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleUserClick(user.id)}
                className="border-b hover:bg-gray-100 hover:underline transition duration-200"
              >
                <td className="p-4 flex justify-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={user?.photo}
                      alt={user?.name}
                      className="rounded-full h-12"
                    />
                    {user?.name}
                  </div>
                </td>
                <td className="p-4 text-center">{user?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <ul className="inline-flex items-center -space-x-px">
          {[...Array(totalPages)].map((_, index) => ( // Cria as páginas
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`
                  py-2 px-3 
                  leading-tight 
                  border 
                  border-gray-300  
                  hover:bg-neon-500 
                  text-gray-500 
                  hover:text-slate-50 
                  ${currentPage === index + 1 ? "bg-neon-500 text-slate-50 font-semibold" : "bg-white"}
                `}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
