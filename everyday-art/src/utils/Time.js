import React from 'react';
import date from 'date-and-time';

export default class Time extends React.Component {
    render() {
        const now = new Date();
        return (
            <div>
                {date.format(now, 'MMMM DD')}
            </div>
        );
    }
}