import { Link } from "react-router-dom";

function NoteCard({note} : {note: {title: string, body: string}}) {
    const notetitle = note.title
    const notebody = note.body
    const props = {notetitle, notebody}
    return (
        <Link to={`/notes/${note.title}`} {...props}>
        <div className="note">
        <h3>{note.title}</h3>
        </div> 
        </Link>
    )
};

export default NoteCard;