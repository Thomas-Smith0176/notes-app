import { useState } from "react";
import NoteCard from "./Note";
import NoteAdder from "./NoteAdder";

function NotesList() {
    var emptyArray : {title: string, body: string}[] = []
    const [notes, setNotes] = useState(emptyArray)

    console.log(notes)

    return (
        <section className="notes-list">
        <NoteAdder setNotes={setNotes} notes={notes}/>
        <ul>
        {notes.map((note) => {
            return <li>
                <NoteCard note={note}/>
            </li>
        })}
        </ul>
        </section>
    )

}

export default NotesList;