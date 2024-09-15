import React, { useEffect, useState } from 'react'
import './Scoreboard.scss'
import axios from 'axios';

function Scoreboard({data}) {
  function truncateTitle(input, value) {
    if (input.length > value) {
       return input.substring(0, value) + '...';
    }
    return input;
 };
  return (
<div className="scoreboard">
  <div className="scoreboard__container">
    <div className="scoreboard__basics mb-05">
      <span className="label">
        {data.fixture.status.long}
      </span>
      <span className="text-danger">
        {data.fixture.status.elapsed}'
      </span>
    </div>
    <div className="scoreboard__teams">
      <div className="scoreboard__team scoreboard__team--align-right mr-2">
        <div className="scoreboard__badge ml-1">
          <img src={data.teams.home.logo} alt="Manchester United"/>
        </div>
        <span className="scoreboard__name">{truncateTitle(data.teams.home.name, 17)}</span>
      </div>
      <div className="scoreboard__result">
        <span className="scoreboard__result-home">{data.goals.home}</span>
        <span className="scoreboard__result-separator">:</span>
        <span className="scoreboard__result-home">{data.goals.away}</span>
      </div>
      <div className="scoreboard__team scoreboard__team--align-left ml-2">
        <div className="scoreboard__badge mr-1">
          <img src={data.teams.away.logo} alt="Liverpool" />
        </div>
        <span className="scoreboard__name">{truncateTitle(data.teams.away.name, 17)}</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Scoreboard