import React from 'react';
import date from 'date-and-time';
import styled from "styled-components";

/* This simple class component returns the current date (example format: "September 12") */

const Div = styled.div`
    font-size: 2em;
`

export default class Time extends React.Component {
    render() {
        const now = new Date();
        return (
            <Div>
                {date.format(now, 'MMMM DD')}
            </Div>
        );
    }
}