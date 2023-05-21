import { NextFunction, Request, Response } from "express";
import {
  createUserToDb,
  getAdminUsersFromDb,
  getUserByIdFromDb,
  getUsersFromDb,
} from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserToDb(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDb();
  console.log("it's working");
  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserByIdFromDb(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getAdminUsers = async (req: Request, res: Response) => {
  const admins = await getAdminUsersFromDb();
  res.status(200).json({
    status: "success",
    data: admins,
  });
};
