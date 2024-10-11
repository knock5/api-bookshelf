import "dotenv/config";
import Hapi from "@hapi/hapi";
import routes from "./routes.js";

const port = process.env.PORT_DEV;

const init = async () => {
  const server = Hapi.server({
    port: port || 9000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on port: ${port}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
