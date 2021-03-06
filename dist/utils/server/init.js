"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const cors_1 = __importDefault(require("cors"));
const playlist_1 = __importDefault(require("../../routers/playlist"));
const config_1 = __importDefault(require("../../config"));
exports.default = (expressPackage, port) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const app = expressPackage();
    process.env.NODE_ENV === "development" ? app.use(cors_1.default({ origin: "http://localhost:3000" })) : null;
    const staticDirPath = (_a = config_1.default.app) === null || _a === void 0 ? void 0 : _a.staticDirPath;
    app.use(express_1.default.static(staticDirPath));
    app.use(playlist_1.default.endpoint, playlist_1.default.router);
    app.listen(port, () => {
        console.log(chalk_1.default.green(`Running on port ${process.env.PORT || 8080}`));
    });
});
