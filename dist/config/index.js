"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    youtube: {
        key: process.env.API_KEY || "",
        salesforce: {
            channelID: "UCUpquzY878NEaZm5bc7m2sQ"
        }
    },
    app: {
        port: process.env.PORT || 5000
    }
};
exports.default = config;