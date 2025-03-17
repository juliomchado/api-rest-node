import fastify from "fastify";
import cookie from "@fastify/cookie";
import { transactionsRoutes } from "./routes/transactions";

export const app = fastify();

app.register(cookie);

app.addHook("preHandler", async (request, reply) => {});

app.register(transactionsRoutes, {
  prefix: "transactions",
});
