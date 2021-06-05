import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ListsPage from "../scenes/ListsPage";
import VideoPage from "../scenes/VideoPage";

const MainNavigator = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ListsPage} />
                <Route path="/video/:videoId" component={VideoPage} />
            </Switch>
        </Router>
    );
}

export default MainNavigator