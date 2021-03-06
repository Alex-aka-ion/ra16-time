import React from 'react';
import DateTime from './DateTime';
import withRightDateTime from "../hoc/withRightDateTime";

const DateTimePretty = withRightDateTime(DateTime);

export default function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}
