const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  await server.start();
  console.log(`Server anda berjalan pada ${server.info.uri}`);
};

init();