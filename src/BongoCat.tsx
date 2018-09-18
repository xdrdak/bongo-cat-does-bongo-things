import * as React from 'react';

import pawLeft from './img/paw-left.png';
import pawRight from './img/paw-right.png';
import pawDown from './img/paw-down.png';
import pawUp from './img/paw-up.png';

type Props = {
  paw: String;
};

export class BongoCat extends React.Component<Props, any> {
  props = {
    paw: 'down',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { paw } = this.props;
    const pawUpStyle = paw !== 'up' ? { display: 'none' } : {};
    const pawDownStyle = paw !== 'down' ? { display: 'none' } : {};
    const pawLeftStyle = paw !== 'left' ? { display: 'none' } : {};
    const pawRightStyle = paw !== 'right' ? { display: 'none' } : {};
    return (
      <React.Fragment>
        <img src={pawUp} className="img" style={pawUpStyle} />
        <img src={pawDown} className="img" style={pawDownStyle} />
        <img src={pawLeft} className="img" style={pawLeftStyle} />
        <img src={pawRight} className="img" style={pawRightStyle} />
      </React.Fragment>
    );
  }
}
