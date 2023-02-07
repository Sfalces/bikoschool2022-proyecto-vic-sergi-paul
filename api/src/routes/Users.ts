

import { Router, Request, Response } from "express";
import low from "lowdb";
import { DataBaseSchema } from "../db/memes";

interface User  {
    name: string,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    token: string,
    profileimage: string,
}

interface Token{
  token: string[]
}

export const UsersRouter = (db: low.LowdbSync<DataBaseSchema>) => {
  const router = Router();

  router.post("/login", (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const users : User[]= db.get("users").value();

    const user : User | undefined = users.find((user) => 
        user.username == username && user.password == password
    )

    if (user === undefined){
        res.json("");
        return
    }

    user.token = user.name+user.firstname;
    
    const response = {
        "token": user.token,
        "image": user.profileimage
    }

    res.json(response);
  });

  return router;
};