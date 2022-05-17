import React, {useEffect, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";

const NotFound = () => {

    let location = useLocation();
    const [counter, setCounter] = useState(10);

    const countdown = () => setCounter(counter-1);

    useEffect(() => {
        const timeoutID = setTimeout(countdown, 1000);
        return() => clearTimeout(timeoutID);
    }, [counter]);

    return (<main className="container_not_found">
        <div className="not_found_content">
            <h1>Page not found - error code 404</h1>
            <p>Redirect to homepage in {counter} seconds...</p>
            <p>No match for <code>{location.pathname}</code></p>
            {counter===0 ? <Navigate replace to="/" /> : ""}
        </div>

        <ul className="circles">
            {Array.apply(0, Array(10)).map(function (x, i) {
                return <li key={i} />;
            })}
        </ul>
    </main>)
}
export default NotFound;