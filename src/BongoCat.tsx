import * as React from 'react';

import pawLeft from './img/paw-left.png';
import pawRight from './img/paw-right.png';
import pawDown from './img/paw-down.png';
import pawUp from './img/paw-up.png';

type Props = {
  paw: String
}

export class BongoCat extends React.Component<Props, any> {
  props = {
    paw: 'down',
  }

  constructor(props) {
    super(props);
  }

  get pawState() {
    switch(this.props.paw) {
      case 'up':
        return pawUp;
      case 'left':
        return pawLeft;
      case 'right':
        return pawRight;
      case 'down':
      default:
        return pawDown;
    }
  }

  render () {
    return(
      <img src={this.pawState} className="img" />
    )
  }
}