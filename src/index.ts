import axios from "axios"
import Mixpanel from "mixpanel"

import config from "./config"

const { mixPanel } = config

const mixpanel = Mixpanel.init('8ed3d1847bb7ce017d3b02571a1e9cf4');


const url = "https://mixpanel.com/api/app/me"
axios.get(url, {
    params: {
        project_id: "2383680",
        // funnel_id: "685944"
    }
    , auth: {
        username: mixPanel.username,
        password: mixPanel.secret
    },
    headers: { Accept: 'application/json' }
}).then(res => console.log(res.data.results.projects))
    .catch(err => console.log(err))