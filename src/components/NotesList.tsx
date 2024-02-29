import { useState } from "react";
import Note from "./Note";
import NoteAdder from "./NoteAdder";

function NotesList() {
    var emptyArray : string[] = []
    const [notes, setNotes] = useState(emptyArray)

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