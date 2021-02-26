import React from 'react';
import moment from "moment";
import 'moment/locale/ru';

moment.locale('ru');

export default function withRightDateTime(Component) {
    return function (props) {
        const date = moment(props.date).startOf('minute').fromNow();
        return <Component {...props} date={date}/>;
    };
}
