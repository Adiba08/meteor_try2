import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import SocialExposure from "./SocialExposure.jsx";
import Task from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;
     // basically in the return we are making the connections that lead to playerprofile, task and social exposure. In GTC, there are different cases, but we don't need that now. 
    return (
      <div className="round">
        <div className="content">
          <PlayerProfile player={player} stage={stage} game={game} />
          <Task game={game} round={round} stage={stage} player={player} />
          <SocialExposure stage={stage} player={player} game={game} />
        </div>
      </div>
    );
  }
}
