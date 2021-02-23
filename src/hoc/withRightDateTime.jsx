import React from 'react';
import moment from "moment";
import 'moment/locale/ru';

moment.locale('ru');

export default function withRightDateTime() {
    return function (Component) {
        return class extends React.Component {
            render(){
                const date = moment(this.props.date).startOf('minute').fromNow();

                return <Component {...this.props} date={date} {...this.state}/>;
            }
        };
    };
}
