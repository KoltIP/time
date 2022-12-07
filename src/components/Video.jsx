import React from "react";
import DateTimePretty from "./DateTimePretty";

const Video = (props) => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

export default Video;