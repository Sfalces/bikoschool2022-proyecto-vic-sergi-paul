import { UserRepository, Token } from "../domain/meme";

export const SERVER = "localhost:4000";

export const apiUserRepository: UserRepository = {
  login: async (username: string, password: string) => {
    const url = `http://${SERVER}/users/login`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };

    const response:  Token | undefined = await fetch(url, requestOptions).then(
      (response) => {
        console.log('prueba',response.status)
        
        if (response.status === 200) return response.json()
        return undefined;
      }
    );
    if (response?.token === "") return undefined;
    return response;
  },
};
