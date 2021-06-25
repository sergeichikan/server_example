import {createServer} from "http";
import {promises, readFile, readFileSync} from "fs";

export const server = createServer();

server.on("request", async (request, response) => {
    const { method, url } = request;
    console.log(method, url);
    if (method === "GET") {
        if (url === "/") {
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            const p = "./front/index.html";
            const f = await promises.readFile(p, {encoding: "utf-8"});
            response.write(f);
            response.end();
        } else if (url === "/front/index.js") {
            response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
            const p = "./front/index.js";
            const f = await promises.readFile(p, {encoding: "utf-8"});
            response.write(f);
            response.end();
        } else if (url === "/asd") {
            response.write("is server text");
            response.end();
        }
    }
});
