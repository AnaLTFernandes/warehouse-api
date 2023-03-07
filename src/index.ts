import express, { json, Request, Response } from "express";
import cors from "cors";

const server = express();

server
	.use(cors())
	.use(json())
	.get("/health", (req: Request, res: Response) => res.send("It's alive!!!"));

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));
