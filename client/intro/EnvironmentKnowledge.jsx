import React from "react";

import { Centered } from "meteor/empirica:core";

export default class EnvironmentKnowledge extends React.Component {
  state = {informed: "", sources: "", newsletters: "", read: "", antinewsletters: "", vote: ""};

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
    const { informed, sources, newsletters, read, antinewsletters, vote } = this.state;
    return (
      <Centered>
        <div className="environmentknowledge">
          <h1> Environmental Knowledge and Sentiment</h1>
          
          <form onSubmit={this.handleSubmit}>

          <p>
             <label htmlFor="informed">
             How informed about the environment do you consider yourself to be? <br />
             </label>
              <input type="radio" dir="auto" id="informed" name="informed" value={informed} onChange={this.handleChange} autoComplete="off" /> Not Informed at All &nbsp;&nbsp;&nbsp;&nbsp;   
              <input type="radio" dir="auto" id="informed" name="informed" value={informed} onChange={this.handleChange} autoComplete="off" /> Inadequately Informed  &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="informed" name="informed" value={informed} onChange={this.handleChange} autoComplete="off" /> Moderately Informed &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="informed" name="informed" value={informed} onChange={this.handleChange} autoComplete="off" /> Well Informed &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="informed" name="informed" value={informed} onChange={this.handleChange} autoComplete="off" /> Highly Informed &nbsp;&nbsp;&nbsp;&nbsp;
           </p>

           <p>
             <label htmlFor="sources">
             From the list below, choose your main sources of information about the environment. <br />
             </label>
              <input type="checkbox" dir="auto" id="sources" name="sources" value={sources} onChange={this.handleChange} autoComplete="off" /> Newspapers <br /> 
              <input type="checkbox" dir="auto" id="sources" name="sources" value={sources} onChange={this.handleChange} autoComplete="off" /> Social media like Facebook, Twitter, Instagram, etc. <br />  
              <input type="checkbox" dir="auto" id="sources" name="sources" value={sources} onChange={this.handleChange} autoComplete="off" /> The Internet including websites, blogs, forums <br />
              <input type="checkbox" dir="auto" id="sources" name="sources" value={sources} onChange={this.handleChange} autoComplete="off" /> Books, Magazines and Publications <br /> 
              <input type="checkbox" dir="auto" id="sources" name="sources" value={sources} onChange={this.handleChange} autoComplete="off" /> Television and Radio including films, documentaries and news <br />  
              <input type="checkbox" dir="auto" id="sources" name="sources" value={sources} onChange={this.handleChange} autoComplete="off" /> Special Events like conferences, fairs, exhibitions, festivals, etc. <br />
              <input type="checkbox" dir="auto" id="sources" name="sources" value={sources} onChange={this.handleChange} autoComplete="off" /> Other <br />
           </p>

           <p>Please answer the following questions.</p>

           <p>
             <label htmlFor="newsletters">
             I have read newsletters, magazines or other publications written by environmental groups. <br />
             </label>
              <input type="radio" dir="auto" id="newsletters" name="newsletters" value={newsletters} onChange={this.handleChange} autoComplete="off" /> Strongly agree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="newsletters" name="newsletters" value={newsletters} onChange={this.handleChange} autoComplete="off" /> Agree &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="newsletters" name="newsletters" value={newsletters} onChange={this.handleChange} autoComplete="off" /> Neutral &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="newsletters" name="newsletters" value={newsletters} onChange={this.handleChange} autoComplete="off" /> Disagree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="newsletters" name="newsletters" value={newsletters} onChange={this.handleChange} autoComplete="off" /> Strongly disagree &nbsp;&nbsp;&nbsp;&nbsp;  
           </p>

           <p>
             <label htmlFor="read">
             I like to read about sustainability, climate change, and the environment often. <br />
             </label>
              <input type="radio" dir="auto" id="read" name="read" value={read} onChange={this.handleChange} autoComplete="off" /> Strongly agree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="read" name="read" value={read} onChange={this.handleChange} autoComplete="off" /> Agree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="read" name="read" value={read} onChange={this.handleChange} autoComplete="off" /> Neutral  &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="read" name="read" value={read} onChange={this.handleChange} autoComplete="off" /> Disagree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="read" name="read" value={read} onChange={this.handleChange} autoComplete="off" /> Strongly disagree  &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="antinewsletters">
             I have read newsletters, magazines or other publications written by anti-environmental groups. <br />
             </label>
              <input type="radio" dir="auto" id="antinewsletters" name="antinewsletters" value={antinewsletters} onChange={this.handleChange} autoComplete="off" /> Strongly agree  &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="antinewsletters" name="antinewsletters" value={antinewsletters} onChange={this.handleChange} autoComplete="off" /> Agree  &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="antinewsletters" name="antinewsletters" value={antinewsletters} onChange={this.handleChange} autoComplete="off" /> Neutral &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="antinewsletters" name="antinewsletters" value={antinewsletters} onChange={this.handleChange} autoComplete="off" /> Disagree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="antinewsletters" name="antinewsletters" value={antinewsletters} onChange={this.handleChange} autoComplete="off" /> Strongly disagree &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="vote">
             I have voted for a candidate in an election at least in part because he or she was in favor of strong environmental protection. <br />
             </label>
              <input type="radio" dir="auto" id="vote" name="vote" value={vote} onChange={this.handleChange} autoComplete="off" /> Strongly agree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="vote" name="vote" value={vote} onChange={this.handleChange} autoComplete="off" /> Agree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="vote" name="vote" value={vote} onChange={this.handleChange} autoComplete="off" /> Neutral &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="vote" name="vote" value={vote} onChange={this.handleChange} autoComplete="off" /> Disagree &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="vote" name="vote" value={vote} onChange={this.handleChange} autoComplete="off" /> Strongly disagree &nbsp;&nbsp;&nbsp;&nbsp;  
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

