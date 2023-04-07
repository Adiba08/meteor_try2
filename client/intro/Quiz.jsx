import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Quiz extends React.Component {
  state = {age: "", gender: "", ethnicity: "", race: "", zipcode: "", education: "", political_affiliation:""};

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleSubmit = event => {
  event.preventDefault();
  this.props.onNext();
  }

  //  if (this.state.sum !== "4" || this.state.horse !== "white") {
  //    alert("Incorrect! Read the instructions, and please try again.");
  //  } else {
  //    
  //  
  //};

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { age, gender, ethnicity, race, zipcode, education, political_affiliation} = this.state;
    const newLocal = <br />;
    return (
      <Centered>
        <div className="quiz">
          <h1> Demographic information</h1>
          <form onSubmit={this.handleSubmit}>
           <p>
             <label htmlFor="age">
                Please select your age range.  
             </label>
              <input type="radio" dir="auto" id="age" name="age" value={age} onChange={this.handleChange} autoComplete="off" /> 18-24 years old <br /> 
              <input type="radio" dir="auto" id="age" name="age" value={age} onChange={this.handleChange} autoComplete="off" /> 25-34 years old <br />  
              <input type="radio" dir="auto" id="age" name="age" value={age} onChange={this.handleChange} autoComplete="off" /> 35-44 years old <br />
              <input type="radio" dir="auto" id="age" name="age" value={age} onChange={this.handleChange} autoComplete="off" /> 45-54 years old <br /> 
              <input type="radio" dir="auto" id="age" name="age" value={age} onChange={this.handleChange} autoComplete="off" /> 55-64 years old <br />  
              <input type="radio" dir="auto" id="age" name="age" value={age} onChange={this.handleChange} autoComplete="off" /> 65-74 years old <br />
              <input type="radio" dir="auto" id="age" name="age" value={age} onChange={this.handleChange} autoComplete="off" /> 75 years or older <br />
           </p>

           <p>
             <label htmlFor="gender">
             Please select gender.
             </label>
              <input type="radio" dir="auto" id="gender" name="gender" value={gender} onChange={this.handleChange} autoComplete="off" /> Male <br /> 
              <input type="radio" dir="auto" id="gender" name="gender" value={gender} onChange={this.handleChange} autoComplete="off" /> Female <br />  
              <input type="radio" dir="auto" id="gender" name="gender" value={gender} onChange={this.handleChange} autoComplete="off" /> Other <br />  
           </p>

        
           <p>
             <label htmlFor="ethniciy">
             Are you of Hispanic, Latino, or of Spanish origin?
             </label>
              <input type="radio" dir="auto" id="ethnicity" name="ethnicity" value={ethnicity} onChange={this.handleChange} autoComplete="off" /> Yes <br /> 
              <input type="radio" dir="auto" id="ethnicity" name="ethnicity" value={ethnicity} onChange={this.handleChange} autoComplete="off" /> No <br />  
           </p>
           <p>
             <label htmlFor="race">
                Please select your race.  
             </label>
              <input type="checkbox" dir="auto" id="race" name="race" value={race} onChange={this.handleChange} autoComplete="off" /> White {newLocal} 
              <input type="checkbox" dir="auto" id="race" name="race" value={race} onChange={this.handleChange} autoComplete="off" /> Black or African American <br />  
              <input type="checkbox" dir="auto" id="race" name="race" value={race} onChange={this.handleChange} autoComplete="off" /> American Indian or Alaska Native <br />
              <input type="checkbox" dir="auto" id="race" name="race" value={race} onChange={this.handleChange} autoComplete="off" /> Asian <br /> 
              <input type="checkbox" dir="auto" id="race" name="race" value={race} onChange={this.handleChange} autoComplete="off" /> Native Hawaiian or Other Pacific Islander <br />  
              <input type="checkbox" dir="auto" id="race" name="race" value={race} onChange={this.handleChange} autoComplete="off" /> Other <br />
           </p>

           <p>
            <label htmlFor="zipcode">
              Please enter your zipcode. 
            </label>
            <input type="text" dir="auto" id="zipcode" name="zipcode" placeholder="e.g. 14620" value={zipcode} onChange={this.handleChange} autoComplete="off" required/>
           </p>

           <p>
             <label htmlFor="education">
             What is the highest degree or level of school you completed?
             </label>
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> Less than high school degree <br /> 
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> High school degree or equivalent <br />  
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> Some college credit, no degree <br /> 
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> Associates degree <br />  
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> Bachelors degree  <br /> 
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> Masters degree <br />  
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> Professional degree beyond bachelors degree <br /> 
              <input type="radio" dir="auto" id="education" name="education" value={education} onChange={this.handleChange} autoComplete="off" /> Doctorate degree <br />  
           </p>

           <p>
            <label htmlFor="political_affiliation">
              Please enter your political affiliation 
            </label>
            <input type="text" dir="auto" id="political_affiliation" name="political_affiliation" value={political_affiliation} onChange={this.handleChange} autoComplete="off" required/>
           </p>
           
            <p>
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Back to previous page
              </button>
              <button type="submit">Submit and go to next page</button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}
