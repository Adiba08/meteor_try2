import React from "react";

import { Centered } from "meteor/empirica:core";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </label>
);

export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = {feedback: "" };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { feedback} = this.state;

    return (
      <Centered>
        <div className="exit-survey">
          <h1> Exit Survey </h1>
          <p> Please submit the following code to receive your bonus:{" "} <strong>{player._id}</strong>. </p>
          <p>
            You final <strong>bonus</strong> is in addition of the{" "}
            <strong>1 base reward</strong> for completing the HIT.
          </p>
          <br />
          <p>
            If you have any feedback, please feel free to provide it here. 
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line"> </div>
              <div>
                <label htmlFor="feedback"> Please provide Feedback, including problems you encountered. </label>
                <div>
                  <textarea dir="auto" id="feedback" name="feedback" value={feedback} onChange={this.handleChange} />
                </div>
              </div>
            <button type="submit">Submit</button>
          </form>
          </div>
      </Centered>
    );
  }
}
