import React from "react";

import { Centered } from "meteor/empirica:core";

export default class MFQ2 extends React.Component {
  state = {attentioncheck2: "", harm4: "", harm5: "", harm6: "", fairness4: "",fairness5: "",fairness6: "",ingroup4: "",ingroup5: "",ingroup6: "", authority4: "",authority5: "",authority6: "",purity4: "",purity5: "",purity6: ""};

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
    const {attentioncheck2, harm4, harm5, harm6, fairness4,fairness5,fairness6,ingroup4,ingroup5,ingroup6, authority4,authority5,authority6,purity4,purity5,purity6} = this.state;
    const newLocal = <br />;
    return (
      <Centered>
        <div className="MFQ2">
        <h1> Please answer the following questions</h1>
          <form onSubmit={this.handleSubmit}>
            <p>Please read the following sentences and indicate your agreement or disagreement:  <br />
            0 - Strongly disagree  <br />
            1 - Moderately disagree <br />
            2 - Slightly disagree <br />
            3 - Slightly agree <br />
            4 - Moderately agree  <br />
            5 - Strongly agree  <br />
             <br />
            </p>
           <p>
             <label htmlFor="harm4">
             Compassion for those who are suffering is the most crucial virtue.  <br />
             </label>
             <input type="radio" dir="auto" id="harm4" name="harm4" value={harm4} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm4" name="harm4" value={harm4} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="harm4" name="harm4" value={harm4} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="harm4" name="harm4" value={harm4} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm4" name="harm4" value={harm4} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm4" name="harm4" value={harm4} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="fairness4">
             When the government makes laws, the number one principle should be ensuring that everyone is treated fairly.  <br />
             </label>
             <input type="radio" dir="auto" id="fairness4" name="fairness4" value={fairness4} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness4" name="fairness4" value={fairness4} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="fairness4" name="fairness4" value={fairness4} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="fairness4" name="fairness4" value={fairness4} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness4" name="fairness4" value={fairness4} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness4" name="fairness4" value={fairness4} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="ingroup4">
             I am proud of my country’s history.  <br />
             </label>
             <input type="radio" dir="auto" id="ingroup4" name="ingroup4" value={ingroup4} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup4" name="ingroup4" value={ingroup4}  onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="ingroup4" name="ingroup4" value={ingroup4}  onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="ingroup4" name="ingroup4" value={ingroup4}  onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup4" name="ingroup4" value={ingroup4}  onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup4" name="ingroup4" value={ingroup4}  onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="authority4">
             Respect for authority is something all children need to learn. <br />
             </label>
             <input type="radio" dir="auto" id="authority4" name="authority4" value={authority4} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority4" name="authority4" value={authority4} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="authority4" name="authority4" value={authority4} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="authority4" name="authority4" value={authority4} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority4" name="authority4" value={authority4} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority4" name="authority4" value={authority4} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="purity4">
             People should not do things that are disgusting, even if no one is harmed. <br />
             </label>
             <input type="radio" dir="auto" id="purity4" name="purity4" value={purity4} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity4" name="purity4" value={purity4} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="purity4" name="purity4" value={purity4} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="purity4" name="purity4" value={purity4} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity4" name="purity4" value={purity4} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity4" name="purity4" value={purity4} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="attentioncheck2">
             It is better to do good than to do bad. <br />
             </label>
             <input type="radio" dir="auto" id="attentioncheck2" name="attentioncheck2" value={attentioncheck2} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="attentioncheck2" name="attentioncheck2" value={attentioncheck2} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="attentioncheck2" name="attentioncheck2" value={attentioncheck2} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="attentioncheck2" name="attentioncheck2" value={attentioncheck2} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="attentioncheck2" name="attentioncheck2" value={attentioncheck2} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="attentioncheck2" name="attentioncheck2" value={attentioncheck2} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="harm5">
             One of the worst things a person could do is hurt a defenseless animal. <br />
             </label>
             <input type="radio" dir="auto" id="harm5" name="harm5" value={harm5} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm5" name="harm5" value={harm5} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="harm5" name="harm5" value={harm5} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="harm5" name="harm5" value={harm5} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm5" name="harm5" value={harm5} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm5" name="harm5" value={harm5} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="fairness5">
             Justice is the most important requirement for a society. <br />
             </label>
             <input type="radio" dir="auto" id="fairness5" name="fairness5" value={fairness5} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness5" name="fairness5" value={fairness5} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="fairness5" name="fairness5" value={fairness5} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="fairness5" name="fairness5" value={fairness5} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness5" name="fairness5" value={fairness5} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness5" name="fairness5" value={fairness5} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="ingroup5">
             People should be loyal to their family members, even when they have done something wrong. <br />
             </label>
             <input type="radio" dir="auto" id="ingroup5" name="ingroup5" value={ingroup5} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup5" name="ingroup5" value={ingroup5} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="ingroup5" name="ingroup5" value={ingroup5} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="ingroup5" name="ingroup5" value={ingroup5} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup5" name="ingroup5" value={ingroup5} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup5" name="ingroup5" value={ingroup5} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="authority5">
             Men and women each have different roles to play in society. <br />
             </label>
             <input type="radio" dir="auto" id="authority5" name="authority5" value={authority5} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority5" name="authority5" value={authority5} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="authority5" name="authority5" value={authority5} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="authority5" name="authority5" value={authority5} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority5" name="authority5" value={authority5} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority5" name="authority5" value={authority5} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="purity5">
             I would call some acts wrong on the grounds that they are unnatural. <br />
             </label>
             <input type="radio" dir="auto" id="purity5" name="purity5" value={purity5} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity5" name="purity5" value={purity5} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="purity5" name="purity5" value={purity5} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="purity5" name="purity5" value={purity5} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity5" name="purity5" value={purity5} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity5" name="purity5" value={purity5} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="harm6">
             It can never be right to kill a human being. <br />
             </label>
             <input type="radio" dir="auto" id="harm6" name="harm6" value={harm6} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm6" name="harm6" value={harm6} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="harm6" name="harm6" value={harm6} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="harm6" name="harm6" value={harm6} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm6" name="harm6" value={harm6} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm6" name="harm6" value={harm6} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="fairness6">
             I think it’s morally wrong that rich children inherit a lot of money while poor children inherit nothing. <br />
             </label>
             <input type="radio" dir="auto" id="fairness6" name="fairness6" value={fairness6} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness6" name="fairness6" value={fairness6} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="fairness6" name="fairness6" value={fairness6} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="fairness6" name="fairness6" value={fairness6} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness6" name="fairness6" value={fairness6} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness6" name="fairness6" value={fairness6} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="ingroup6">
             It is more important to be a team player than to express oneself. <br />
             </label>
             <input type="radio" dir="auto" id="ingroup6" name="ingroup6" value={ingroup6} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup6" name="ingroup6" value={ingroup6} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="ingroup6" name="ingroup6" value={ingroup6} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="ingroup6" name="ingroup6" value={ingroup6} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup6" name="ingroup6" value={ingroup6} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup6" name="ingroup6" value={ingroup6} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="authority6">
             If I were a soldier and disagreed with my commanding officer’s orders, I would obey anyway because that is my duty. <br />
             </label>
             <input type="radio" dir="auto" id="authority6" name="authority6" value={authority6} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority6" name="authority6" value={authority6}  onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="authority6" name="authority6" value={authority6}  onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="authority6" name="authority6" value={authority6} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority6" name="authority6" value={authority6}  onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority6" name="authority6" value={authority6}  onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="purity6">
             Chastity is an important and valuable virtue. <br />
             </label>
             <input type="radio" dir="auto" id="purity6" name="purity6" value={purity6} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity6" name="purity6" value={purity6} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="purity6" name="purity6" value={purity6} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="purity6" name="purity6" value={purity6} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity6" name="purity6" value={purity6} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity6" name="purity6" value={purity6} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
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
