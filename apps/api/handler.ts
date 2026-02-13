import Fastify from "fastify";
import app from "./src/index.js"; // Ensure the path points to your plugin

const server = Fastify({
  logger: true,
});

// Register your existing plugin logic
server.register(app);

export default async (req: any, res: any) => {
  await server.ready();
  server.server.emit("request", req, res);
};
