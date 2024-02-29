// type NoteAdderProps = {
//     setNotes: React.Dispatch<React.SetStateAction<number[]>>;
//     notes: number[];
// }

// : React.FunctionComponent<NoteAdderProps>

const NoteAdder = ({setNotes, notes} : { setNotes : React.Dispatch<React.SetStateAction<number[]>>; notes : number[]}) => {

    const handleClick = () => {
        setNotes([...notes, (notes.length + 1)])
    }

    return (
        <div>
            <button className="note-adder" onClick={handleClick}>Add note</button>
        </div>
    )
};

export default NoteAdder;