import * as React from "react";
import { BongoCat } from "./BongoCat";
import { BongoCatContainer } from "./BongoCatContainer";

const App: React.SFC = () => (
  <div className="wrapper">
    <BongoCatContainer>
      {({ pawState, pawsUp, pawsDown }) => (
        <div
          className="container bongocat-wrapper"
          onMouseDown={pawsDown}
          onMouseUp={pawsUp}
        >
          <BongoCat paw={pawState} />
        </div>
      )}
    </BongoCatContainer>
  </div>
);

export default App;
