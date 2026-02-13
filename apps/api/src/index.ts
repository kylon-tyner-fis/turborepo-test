import type { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
) {
  fastify.get("/", async () => {
    return { hello: "world", from: "Turborepo Fastify API" };
  });

  fastify.get("/status", async () => {
    return { status: "ok" };
  });
}
