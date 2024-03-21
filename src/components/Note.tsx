import {useNavigate } from "react-router-dom";

function NoteCard({note} : {note: {title: string, body: string}}) {

    const navigate = useNavigate();
    
    function handleClick() {
        navigate(`/notes/${note.title}`, {state: {title: note.title, body: note.body}})
    }

    return (
        <a onClick={handleClick}>
        <div className="note">
        <h3>{note.title}</h3>
        </div> 
        </a>

    )
};

export default NoteCard;