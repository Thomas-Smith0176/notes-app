import { Link } from "react-router-dom";

function Note({note} : {note: string}) {
    return (
        <Link to={`/notes/${note}`}>
        <div className="note">
        <h3>{note}</h3>
        </div>
        </Link>
    )
};

export default Note;