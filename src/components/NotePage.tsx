import { useParams } from "react-router-dom";

interface Params {
    noteId: string
}

function NotePage() {
    const {noteId} = useParams<Params>();
    console.log(noteId)
    return (
        <h1>{noteId}</h1>
    )
}

export default NotePage; 