import { Link } from "react-router-dom";
import Header from "./Header";
import NotesList from "./NotesList";

function Home() {
    return (
        <section>
            <Header/>
            <NotesList/>
            <Link to="/notes/42">Go to note 42</Link>
        </section>
    )
}

export default Home;
