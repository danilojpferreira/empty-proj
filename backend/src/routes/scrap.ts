import { Router, Request, Response } from "express";
import { example } from "../utils/webscrapper";

const scrapRoutes = Router();

scrapRoutes.get("/scrap", async (request: Request, response: Response) => {
  try {
    const res = await example();
    return response.status(200).send(res);
  } catch (error) {
    return response.status(error.statusCode).send();
  }
});

export { scrapRoutes };
