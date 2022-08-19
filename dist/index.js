"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = require("fs");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// routes
(0, fs_1.readdirSync)('./routes').map((route) => app.use("/api", require(`./routes/${route.split('.')[0]}`)));
app.listen(port, () => {
    console.log("Server started");
});
