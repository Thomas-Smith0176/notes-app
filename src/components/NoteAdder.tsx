import { useState } from "react";


const NoteAdder = ({setNotes, notes} : { setNotes : React.Dispatch<React.SetStateAction<string[]>>; notes : string[]}) => {

    const [input, setInput] = useState('');

    const handleClick = () => {
        setNotes([...notes, input]);
        setInput('');
    };

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value);
    };

    console.log(input)

    return (
        <div>
            <form>
                <label>
                    <input type="text" value={input} onChange={handleChange}/>
                </label>
            </form>
            <button className="note-adder" onClick={handleClick}>Add note</button>
        </div>
    )
};

export default NoteAdder;