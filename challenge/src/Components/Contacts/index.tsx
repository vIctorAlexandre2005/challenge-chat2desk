import { User } from "@/@types/userData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GET_USERS_QUERY = `
  query {
    users {
      id
      name
      email
      username
    }
  }
`;

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

export function Contacts() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchUsers(); // Fazer a requisição "GraphQL"
          setUsers(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  const router = useRouter();

  function handleOtherPage(index: number) {
    router.push(`/user/${index}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  console.log("users:", users)

  return (
    <div className="flex flex-col justify-center w-full p-10">
      <h3 className="text-xl font-medium mb-4">Meus contatos ({users.length})</h3>
      <div className="w-full">
        <table className="min-w-full bg-white shadow-md text-center h-4/5 rounded-xl overflow-hidden">
          <thead className="bg-neon-500">
            <tr>
              <th className="text-center py-3 px-4 text-neon-50 font-bold">Nome</th>
              <th className="text-center py-3 px-4 text-neon-50 font-bold">Email</th>
              <th className="text-center py-3 px-4 text-neon-50 font-bold">Ação</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-6">{user?.name}</td>
                <td className="py-6">{user?.email}</td>
                <td 
                    onClick={() => handleOtherPage(user?.id)} 
                    className="py-3 px-4 hover:bg-neon-300 cursor-pointer hover:font-semibold hover:text-white transition duration-100">
                    Ver detalhe
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-4">
        <ul className="inline-flex items-center -space-x-px">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`py-2 px-3 leading-tight border border-gray-300  hover:bg-neon-500 text-gray-500 hover:text-slate-50 ${
                  currentPage === index + 1 ? "bg-neon-500 text-slate-50 font-semibold" : "bg-white"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}