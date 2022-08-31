import "dotenv/config";

import { serverHttp } from "./server.js";
import "./websocket.js";

const port = process.env.PORT;

serverHttp.listen(port, () =>
  console.log("Server up and running on port", port)
);
