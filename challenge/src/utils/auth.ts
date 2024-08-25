// /utils/auth.js
export const validateCredentials = (userName: string, password: string) => {
    const validUser = "chat2desk";
    const validPassword = "password123";
  
    return userName === validUser && password === validPassword;
  };
  