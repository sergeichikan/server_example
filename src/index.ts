import {server} from "./server.js";

const host = "localhost";
const port = 3000;

server.listen(port, host, () => {
    console.log(`http://${host}:${port}/`);
});