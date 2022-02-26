import { promises as fs } from "fs";

export default JSON.parse(await fs.readFile("config.json", "utf-8"));
