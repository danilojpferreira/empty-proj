export const mongoUri: string = process.env.MONGO_URI;
export const port: number = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : 3000;
