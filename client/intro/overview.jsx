import React from "react";

import { Centered } from "meteor/empirica:core";


export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    const { player } = this.props;
    player.set("instructionsCumulativeScore", 11);
  }

  // import { Button, ButtonGroup } from "@blueprintjs/core";
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="overview">
          <h1 className={"bp3-heading"}> Game overview </h1>
          <p>
            After completing the instructions and comprehension check, you will
            begin the game.
          </p>
          <p>
            The game consists of{" "}
            <strong>{game.treatment.nRounds} rounds</strong>{" "} and you will play simultaneously{" "} <strong>
                  {" "}
                  with {game.treatment.playerCount - 1} other MTurk workers
                </strong>.
            At each round, you will be given a statement regarding climate change and be asked to{" "}
            <strong>rate the statement on a Likert Scale from strongly disagree to strongly agree, and provide reasoning</strong>.
          </p>

        <form>
          <p>
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to previous page
              </button>
              <button type="submit" onClick={onNext} disabled={!hasNext}>Submit and go to next page</button>
            </p>
        </form>
        </div>
      </Centered>
    );
  }
}
