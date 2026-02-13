import Fastify from "fastify";
import app from "./src/index";

const server = Fastify({ logger: true });
server.register(app);

// Vercel Serverless Handler
export default async (req: any, res: any) => {
  await server.ready();
  server.server.emit("request", req, res);
};
