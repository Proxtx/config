import { promises as fs } from "fs";

let config = JSON.parse(await fs.readFile("config.json", "utf-8"));
export default config;

export const refresh = async (time) => {
for(let i of Object.keys(config)){
delete config[I]
}

Object.assign(config, JSON.parse(await fs.readFile("config.json", "utf-8")));
setTimeout(refresh.bind(this, time), time);
}
