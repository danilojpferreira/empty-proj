/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import "express-async-errors";

import cors from "cors";

import express, { Request, Response, NextFunction } from "express";
import { checkRoutes } from "./routes/check";
import AppError from "./errors/AppError";
import { port } from "./utils/config";
import { scrapRoutes } from "./routes/scrap";

const app = express();
app.use(cors());
app.use(express.json());
app.use(checkRoutes);
app.use(scrapRoutes);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${
        err.message ?? "No identified error"
      } `,
    });
  }
);

app.listen(port, () => console.log(`Server started on port ${port}!🚀`));
