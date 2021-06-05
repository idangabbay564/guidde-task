import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import loadListItems from "../../service/list/loadListItems";
import endpoints from "../../Utils/endpoints";
import ListTypes from "../../Utils/mappers/ListTypes";
import ListItem from "./ListItem"
import Loader from "./Loader";

const List = (props) => {
    const { type, playlistID, setPlaylistID } = props

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(items)

    useEffect(
        () => loadListItems(type, playlistID, setItems, setLoading),
        [playlistID])


    return (

        loading

            ?

            (<Loader />)

            :

            (<ListGroup style={style}>
                {items
                    ?
                    (items.map((item) =>
                        <ListItem item={item} setPlaylistID={setPlaylistID}
                            type={type}
                        />
                    ))
                    :
                    null}
            </ListGroup>)
    )
}

const style = {

}

export default List