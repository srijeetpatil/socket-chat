import { io } from "socket.io-client";
import { getCookie } from "./cookie";
var os = require("os");

var uri = "https://socketchatmern.herokuapp.com/";

if (os.hostname().indexOf("local") > -1) {
  uri = "http://localhost:3000/";
}

export const socket = io(uri);

let Token = getCookie("auth");

if (Token) socket.emit("config", { token: Token });
