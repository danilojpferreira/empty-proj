import { Router, Request, Response } from "express";

const checkRoutes = Router();

checkRoutes.get("/check", async (request: Request, response: Response) => {
  try {
    return response.status(200).send({ message: "ok" });
  } catch (error) {
    return response.status(error.statusCode).send();
  }
});

export { checkRoutes };
