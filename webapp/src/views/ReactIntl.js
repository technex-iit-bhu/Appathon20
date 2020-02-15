import React, {Component} from 'react';
import {FormattedDate, FormattedMessage} from 'react-intl';

const App1 = ({importantDate}) => (
  <div>
    <FormattedDate
      value={importantDate}
      year='numeric'
      month='long'
      day='numeric'
      weekday='long'
    />
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name       : 'Eric',
      unreadCount: 1000,
    };
  }

  render() {
    const {name, unreadCount} = this.state;

    return (
      <div>
        <FormattedMessage
          id="welcome"
          defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
          values={{name: <b>{name}</b>, unreadCount}}
        />
        <App1 importantDate={new Date()}/>
      </div>
    );
  }
}


export default App;
