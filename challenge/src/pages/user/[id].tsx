import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center w-full p-10">
      <h3 className="text-xl font-medium mb-4">Detalhes do Usuário</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-2xl font-semibold mb-4">{user?.name}</h4>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Telefone:</strong> {user?.phone}</p>
        <p><strong>Website:</strong> {user?.website}</p>
        <p><strong>Endereço:</strong> {user?.address?.street}, {user?.address?.suite}, {user?.address?.city}, {user?.address?.zipcode}</p>
        <p><strong>Empresa:</strong> {user?.company?.name}</p>
        <p><strong>Slogan:</strong> {user?.company?.catchPhrase}</p>
      </div>
    </div>
  );
}
