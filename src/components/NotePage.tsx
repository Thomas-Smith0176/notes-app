import { useLocation, useParams } from "react-router-dom";

function NotePage() {

    const {state} = useLocation();
    const {title, body} = state;
    console.log(title)
    console.log(body)
    const {noteId} = useParams();
    console.log(noteId)
    return (
        <h1>{noteId}</h1>
    )
}

export default NotePage; 