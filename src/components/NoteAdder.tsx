type NoteAdderProps = {
    setNotes: any;
    notes: number[];
}

const NoteAdder: React.FunctionComponent<NoteAdderProps> = ({setNotes, notes}) => {

    const handleClick = () => {
        setNotes((currNotes: any) => {
            currNotes.push(currNotes.length)
            return currNotes
        })
        console.log(notes)
    }

    return (
        <div>
            <button className="note-adder" onClick={handleClick}>Add note</button>
        </div>
    )
};

export default NoteAdder;