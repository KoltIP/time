import React from "react";

const DateTime = (props) => {
    console.log(props);
    return (
        <p className="date">{props.date}</p>
    )
}

export default DateTime;