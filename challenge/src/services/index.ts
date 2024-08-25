import axios from "axios";
import { useRouter } from "next/router";

export async function getListContacts() {
    try {
        const responseJsonPlaceholder = await axios.get('https://jsonplaceholder.typicode.com/users');
        const responseRandomUser = await axios.get('https://randomuser.me/api/?results=10');

        const combinedData = responseJsonPlaceholder?.data.map((user: any, index: number) => ({
            ...user,
            photo: responseRandomUser?.data.results[index]?.picture?.medium,
        }));
        return combinedData;
    } catch (error) {
        console.error(error);
    };
};

export async function getUserDetails(id: number) {
    try {
      const listContacts = await getListContacts();
      
      if (!listContacts || listContacts.length === 0) {
        throw new Error('Lista de contatos está vazia ou não foi carregada corretamente.');
      }
  
      const user = listContacts.find((user: any) => user.id === id);
      
      if (!user) {
        throw new Error(`Usuário com ID ${id} não encontrado.`);
      }
  
      return user;
    } catch (error) {
      console.error('Erro ao obter os detalhes do usuário:', error);
      throw error; // Re-throw o erro para ser tratado onde a função é chamada
    }
  }
  