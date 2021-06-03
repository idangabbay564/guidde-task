"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const mixpanel_1 = __importDefault(require("mixpanel"));
const config_1 = __importDefault(require("./config"));
const { mixPanel } = config_1.default;
const mixpanel = mixpanel_1.default.init('8ed3d1847bb7ce017d3b02571a1e9cf4');
const url = "https://mixpanel.com/api/app/me";
axios_1.default.get(url, {
    params: {
        project_id: "2383680",
        // funnel_id: "685944"
    },
    auth: {
        username: mixPanel.username,
        password: mixPanel.secret
    },
    headers: { Accept: 'application/json' }
}).then(res => console.log(res.data.results.projects))
    .catch(err => console.log(err));
