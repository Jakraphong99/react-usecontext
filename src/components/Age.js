import React, { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";

function Age() {
    const { setUserage } = useContext(AppContext);
    return (
        <div>
            Age:
            <input
                onChange={(event) => {
                    setUserage(event.target.value);
                }}
            />
        </div>
    );
}
export default Age;