import React, { Component } from 'react';
import classnames from 'classnames';

//XXX: change the babel config to enable async/await.  I also wouldnt put this here
//but due to to the time constraints, didnt create actions.
const Rocket = ({ rocket_id, description, cost_per_launch }) => (
  <div className="rocket">
    <table>
      <tbody>
        <tr>
          <td className="rocket__field-name">Rocket ID</td>
          <td className="rocket__field-value">{rocket_id}</td>
        </tr>
        <tr>
          <td className="rocket__field-name">Cost Per Launch</td>
          <td className="rocket__field-value">{cost_per_launch}</td>
        </tr>
        <tr>
          <td className="rocket__field-name">Desription</td>
          <td className="rocket__field-value">{description}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Rocket;
