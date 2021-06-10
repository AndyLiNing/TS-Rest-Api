import * as http from "http";
import { app } from "./app";

const port = 3000;

http.createServer(app).listen(port,() => {
  console.log(`Server is running on port ${port}`);
});
