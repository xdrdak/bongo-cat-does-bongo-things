import * as React from "react";

enum DIRECTIONS {
  RIGHT = "KeyP",
  LEFT = "KeyQ",
  BOTH = "Space"
}

type State = {
  leftPawDown: Boolean;
  rightPawDown: Boolean;
};

type Prop = {
  children: any;
};

export class BongoCatContainer extends React.Component<Prop, State> {
  constructor(props) {
    super(props);

    this.state = {
      leftPawDown: false,
      rightPawDown: false
    };
  }

  handleKeyUp = (event: KeyboardEvent) => {
    if (!event.repeat) {
      switch (event.code) {
        case DIRECTIONS.RIGHT:
          this.setState({
            rightPawDown: false
          });
          break;
        case DIRECTIONS.LEFT:
          this.setState({
            leftPawDown: false
          });
          break;
        case DIRECTIONS.BOTH:
          this.setState({
            rightPawDown: false,
            leftPawDown: false
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
            rightPawDown: true
          });
          console.log('bam');
          break;
        case DIRECTIONS.LEFT:
          this.setState({
            leftPawDown: true
          });
          break;
        case DIRECTIONS.BOTH:
          this.setState({
            rightPawDown: true,
            leftPawDown: true
          });
          break;
      }
    }
  };

  pawsUp = () => {
    this.setState({ leftPawDown: false, rightPawDown: false });
  };

  pawsDown = () => {
    this.setState({ leftPawDown: true, rightPawDown: true });
  };

  componentDidMount() {
    if (document) {
      document.addEventListener("keydown", this.handleKeydown);
      document.addEventListener("keyup", this.handleKeyUp);
    }
  }

  componentWillUnmount() {
    if (document) {
      document.removeEventListener("keydown", this.handleKeydown);
      document.removeEventListener("keyup", this.handleKeyUp);
    }
  }

  get pawState() {
    if (this.state.leftPawDown && this.state.rightPawDown) {
      return "down";
    } else if (this.state.leftPawDown) {
      return "left";
    } else if (this.state.rightPawDown) {
      return "right";
    }
    return "up";
  }

  render() {
    return this.props.children({
      pawState: this.pawState,
      pawsUp: this.pawsUp,
      pawsDown: this.pawsDown
    });
  }
}
