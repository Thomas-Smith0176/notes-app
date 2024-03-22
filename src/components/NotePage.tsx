import { useLocation, useNavigate } from "react-router-dom";

function NotePage() {
    const {state} = useLocation();
    const {title, body} = state;

    const navigate = useNavigate();

    function handleClick() {
        navigate('/')
    }

    return (
        <section>
            <button onClick={handleClick}>Back to notes</button>
            <h1>{title}</h1>
            <h2>{body}</h2>
        </section>
    )
}

export default NotePage; 