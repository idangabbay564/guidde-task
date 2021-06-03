"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    mixPanel: {
        username: process.env.MP_USERNAME_1 || "",
        secret: process.env.MP_SECRET_1 || "",
        baseURL: "https://mixpanel.com/api/2.0"
    }
};
exports.default = config;
