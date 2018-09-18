import * as React from 'react';
import { SFX } from './sfx/sfx';

import bongoSound1url from './sfx/bongo_1.ogg';
import bongoSound2url from './sfx/bongo_2.ogg';
import bongoSound3url from './sfx/bongo_3.ogg';

enum DIRECTIONS {
  RIGHT = 'KeyP',
  LEFT = 'KeyQ',
  BOTH = 'Space',
}

type State = {
  leftPawDown: Boolean;
  rightPawDown: Boolean;
};

type Prop = {
  children: any;
};

export class BongoCatContainer extends React.Component<Prop, State> {
  sfx: any;

  constructor(props) {
    super(props);
    this.sfx = new SFX([bongoSound1url, bongoSound2url, bongoSound3url]);
    this.state = {
      leftPawDown: false,
      rightPawDown: false,
    };
  }

  handleKeyUp = (event: KeyboardEvent) => {
    if (!event.repeat) {
      switch (event.code) {
        case DIRECTIONS.RIGHT:
          this.setState({
            rightPawDown: false,
          });
          break;
        case DIRECTIONS.LEFT:
          this.setState({
            leftPawDown: false,
          });
          break;
        case DIRECTIONS.BOTH:
          this.setState({
            rightPawDown: false,
            leftPawDown: false,
          });
          break;
      }
    }
  };

  handleKeydown = (event: KeyboardEvent) => {
    if (!event.repeat) {
      switch (event.code) {
        case DIRECTIONS.RIGHT:
          this.setState({
            rightPawDown: true,
          });
          this.sfx.play(0);
          break;
        case DIRECTIONS.LEFT:
          this.setState({
            leftPawDown: true,
          });
          this.sfx.play(1);
          break;
        case DIRECTIONS.BOTH:
          this.setState({
            rightPawDown: true,
            leftPawDown: true,
          });
          this.sfx.play(2);
          break;
      }
    }
  };

  pawsUp = () => {
    this.setState({ leftPawDown: false, rightPawDown: false });
  };

  pawsDown = () => {
    this.setState({ leftPawDown: true, rightPawDown: true });
    this.sfx.play(2);
  };

  pawsUpDown = () => {
    this.setState({ leftPawDown: true, rightPawDown: true }, () => {
      this.sfx.play(2);
      setTimeout(() => {
        this.setState({ leftPawDown: false, rightPawDown: false });
      }, 66);
    });
  };

  pawLeftUpDown = () => {
    this.setState({ rightPawDown: true }, () => {
      this.sfx.play(0);
      setTimeout(() => {
        this.setState({ rightPawDown: false });
      }, 66);
    });
  };

  pawRightUpDown = () => {
    this.setState({ leftPawDown: true }, () => {
      this.sfx.play(1);
      setTimeout(() => {
        this.setState({ leftPawDown: false });
      }, 66);
    });
  };

  componentDidMount() {
    if (document) {
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('keyup', this.handleKeyUp);
    }
  }

  componentWillUnmount() {
    if (document) {
      document.removeEventListener('keydown', this.handleKeydown);
      document.removeEventListener('keyup', this.handleKeyUp);
    }
  }

  get pawState() {
    if (this.state.leftPawDown && this.state.rightPawDown) {
      return 'down';
    } else if (this.state.leftPawDown) {
      return 'left';
    } else if (this.state.rightPawDown) {
      return 'right';
    }
    return 'up';
  }

  render() {
    return this.props.children({
      pawState: this.pawState,
      pawsUp: this.pawsUp,
      pawsDown: this.pawsDown,
      pawsUpDown: this.pawsUpDown,
      pawLeftUpDown: this.pawLeftUpDown,
      pawRightUpDown: this.pawRightUpDown,
    });
  }
}
