import { useState } from "react";


const NoteAdder = ({setNotes, notes} : { setNotes : React.Dispatch<React.SetStateAction<{title: string, body: string}[]>>; notes : {title: string, body: string}[]}) => {

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleClick = () => {
        const newNote = {
            title: titleInput,
            body: bodyInput
        }
        setNotes([...notes, newNote]);
        setTitleInput('');
        setBodyInput('');
    };

    const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setTitleInput(event.currentTarget.value);
    };

    const handleBodyChange = (event: React.FormEvent<HTMLInputElement>) => {
        setBodyInput(event.currentTarget.value);
    };

    return (
        <div>
            <form>
                <label>
                    <input type="text" value={titleInput} onChange={handleTitleChange} placeholder="Title..."/>
                </label>
                <label>
                    <input type="text" value={bodyInput} onChange={handleBodyChange} placeholder="Start noting..."/>
                </label>
            </form>
            <button className="note-adder" onClick={handleClick}>Add note</button>
        </div>
    )
};

export default NoteAdder;