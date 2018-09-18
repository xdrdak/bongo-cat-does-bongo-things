import * as React from 'react';
import { BongoCat } from './BongoCat';
import { BongoCatContainer } from './BongoCatContainer';

const App: React.SFC = () => (
  <div className="wrapper">
    <BongoCatContainer>
      {({
        pawState,
        pawsUp,
        pawsDown,
        pawsUpDown,
        pawRightUpDown,
        pawLeftUpDown,
      }) => (
        <div className="container">
          <div
            className="container bongocat-wrapper"
            onMouseDown={pawsDown}
            onMouseUp={pawsUp}
          >
            <BongoCat paw={pawState} />
          </div>
          <div className="button-container">
            <button className="button" onClick={pawRightUpDown}>
              Q
            </button>
            <button className="button" onClick={pawsUpDown}>
              Space
            </button>
            <button className="button" onClick={pawLeftUpDown}>
              P
            </button>
          </div>
        </div>
      )}
    </BongoCatContainer>
  </div>
);

export default App;
