import { useState } from "react";
import Note from "./Note";
import NoteAdder from "./NoteAdder";

function NotesList() {
    const [notes, setNotes] = useState([1, 2, 3])

    console.log(notes)

    return (
        <section className="notes-list">
        <NoteAdder setNotes={setNotes} notes={notes}/>
        <ul>
        {notes.map(() => {
            return <li>
                <Note/>
            </li>
        })}
        </ul>
        </section>
    )

}

export default NotesList;