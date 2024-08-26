import { render, screen, fireEvent } from '@testing-library/react';
import { LoginComponent } from '@/Components/Login/index';
import { useRouter } from 'next/router';
import { useContextGlobal } from '@/Context';
import { validateCredentials } from '@/utils/auth';
import { toastError, toastSuccess } from '@/utils/toasts';
import { ContactsList } from '@/Components/Contacts';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/Context', () => ({
  useContextGlobal: jest.fn(),
}));

jest.mock('@/utils/auth', () => ({
  validateCredentials: jest.fn(),
}));

jest.mock('@/utils/toasts', () => ({
  toastError: jest.fn(),
  toastSuccess: jest.fn(),
}));

describe('LoginComponent', () => {
  let setIsLogged: jest.Mock;
  let push: jest.Mock;

  beforeEach(() => {
    setIsLogged = jest.fn();
    push = jest.fn();

    (useContextGlobal as jest.Mock).mockReturnValue({ setIsLogged });
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it('renders login form', () => {
    render(<LoginComponent />);

    expect(screen.getByText('Bem-vindo!')).toBeInTheDocument();
    expect(screen.getByText('Faça login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('chat2desk')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password123')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  it('shows error message when form is submitted with empty fields', () => {
    render(<LoginComponent />);

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    expect(toastError).toHaveBeenCalledWith('Por favor, preencha todos os campos');
    expect(setIsLogged).not.toHaveBeenCalled();
    expect(push).not.toHaveBeenCalled();
  });

  it('successfully logs in with valid credentials', () => {
    (validateCredentials as jest.Mock).mockReturnValue(true);

    render(<LoginComponent />);

    fireEvent.change(screen.getByPlaceholderText('chat2desk'), {
      target: { value: 'correctUser' },
    });
    fireEvent.change(screen.getByPlaceholderText('password123'), {
      target: { value: 'correctPassword' },
    });

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    expect(validateCredentials).toHaveBeenCalledWith('correctUser', 'correctPassword');
    expect(toastSuccess).toHaveBeenCalledWith('Login efetuado com sucesso!');
    expect(setIsLogged).toHaveBeenCalledWith(true);
    expect(push).toHaveBeenCalledWith('/');
    expect(localStorage.getItem('isLogged')).toBe('true');
  });
});

describe('ContactsList Component', () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    // Mock da lista de contatos com IDs reais
    const usersMock = [
      { id: 1, name: 'Alice Johnson', email: 'alice@example.com', photo: 'https://example.com/photo1.jpg' },
      { id: 2, name: 'Bob Smith', email: 'bob@example.com', photo: 'https://example.com/photo2.jpg' },
      { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', photo: 'https://example.com/photo3.jpg' },
      // Adicione mais contatos conforme necessário
    ];

    // Mock do contexto global
    (useContextGlobal as jest.Mock).mockReturnValue({
      users: usersMock,
    });

    // Mock do useRouter
    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  it('should navigate to the user detail page when a contact row is clicked', () => {
    render(<ContactsList />);

    // Testa o clique na linha do usuário com ID 2 (Bob Smith)
    const userRow = screen.getByText('Bob Smith').closest('tr');

    // Simula o clique na linha da tabela
    fireEvent.click(userRow!);

    // Verifica se o router.push foi chamado com a URL correta
    expect(pushMock).toHaveBeenCalledWith('/user/2');
  });

  // Outros testes podem ser adicionados para diferentes IDs de usuário
});
