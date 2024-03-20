import { useParams } from "react-router-dom";

function NotePage({...props}) {
    console.log(props)
    const {noteId} = useParams();
    console.log(noteId)
    return (
        <h1>{noteId}</h1>
    )
}

export default NotePage; 