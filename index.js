const { createDeployment } = require("now-client");

async function deploy() {
  console.log("deploying site 1 ...");
  let deployment;

  for await (const event of createDeployment("dist/site1", {
    token: process.env.NOW_TOKEN
  })) {
    if (event.type === "ready") {
      deployment = event.payload;
      break;
    }
  }
  return deployment;
}

deploy()
  .then(console.log)
  .catch(console.error);
