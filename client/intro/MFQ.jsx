import React from "react";

import { Centered } from "meteor/empirica:core";

export default class MFQ extends React.Component {
  state = {attentioncheck1: "", harm1: "", harm2: "", harm3: "", fairness1: "",fairness2: "",fairness3: "",ingroup1: "",ingroup2: "",ingroup3: "", authority1: "",authority2: "",authority3: "",purity1: "",purity2: "",purity3: ""};

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
    const {attentioncheck1, harm1, harm2, harm3, fairness1,fairness2,fairness3,ingroup1,ingroup2,ingroup3, authority1,authority2,authority3,purity1,purity2,purity3} = this.state;
    const newLocal = <br />;
    return (
      <Centered>
        <div className="MFQ">
        <h1> Please answer the following questions</h1>
          <form onSubmit={this.handleSubmit}>
            <p>When you decide whether something is right or wrong, to what extent are the following considerations relevant to your thinking? Please rate each statement using this scale: <br />
                    0 = not at all relevant \This consideration has nothing to do with my judgments of right and wrong\ <br />
                    1 = not very relevant <br />
                    2 = slightly relevant <br />
                    3 = somewhat relevant <br />
                    4 = very relevant <br />
                    5 = extremely relevant \This is one of the most important factors when I judge right and wrong\ <br />
            </p>
           <p>
             <label htmlFor="harm1">
             Whether or not someone suffered emotionally  <br />
             </label>
             <input type="radio" dir="auto" id="harm1" name="harm1" value={harm1} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm1" name="harm1" value={harm1} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="harm1" name="harm1" value={harm1} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="harm1" name="harm1" value={harm1} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm1" name="harm1" value={harm1} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm1" name="harm1" value={harm1} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="fairness1">
             Whether or not some people were treated differently than others  <br />
             </label>
             <input type="radio" dir="auto" id="fairness1" name="fairness1" value={fairness1} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness1" name="fairness1" value={fairness1} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="fairness1" name="fairness1" value={fairness1} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="fairness1" name="fairness1" value={fairness1} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness1" name="fairness1" value={fairness1} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness1" name="fairness1" value={fairness1} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="ingroup1">
             Whether or not someone’s action showed love for his or her country  <br />
             </label>
             <input type="radio" dir="auto" id="ingroup1" name="ingroup1" value={ingroup1} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup1" name="ingroup1" value={ingroup1} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="ingroup1" name="ingroup1" value={ingroup1} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="ingroup1" name="ingroup1" value={ingroup1} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup1" name="ingroup1" value={ingroup1} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup1" name="ingroup1" value={ingroup1} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="authority1">
             Whether or not someone showed a lack of respect for authority <br />
             </label>
             <input type="radio" dir="auto" id="authority1" name="authority1" value={authority1} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority1" name="authority1" value={authority1} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="authority1" name="authority1" value={authority1} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="authority1" name="authority1" value={authority1} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority1" name="authority1" value={authority1} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority1" name="authority1" value={authority1} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="purity1">
             Whether or not someone violated standards of purity and decency <br />
             </label>
             <input type="radio" dir="auto" id="purity1" name="purity1" value={purity1} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity1" name="purity1" value={purity1} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="purity1" name="purity1" value={purity1} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="purity1" name="purity1" value={purity1} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity1" name="purity1" value={purity1} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity1" name="purity1" value={purity1} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="attentioncheck1">
             Whether or not someone was good at math <br />
             </label>
             <input type="radio" dir="auto" id="attentioncheck1" name="attentioncheck1" value={attentioncheck1} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="attentioncheck1" name="attentioncheck1" value={attentioncheck1} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="attentioncheck1" name="attentioncheck1" value={attentioncheck1} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="attentioncheck1" name="attentioncheck1" value={attentioncheck1} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="attentioncheck1" name="attentioncheck1" value={attentioncheck1} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="attentioncheck1" name="attentioncheck1" value={attentioncheck1} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="harm2">
             Whether or not someone cared for someone weak or vulnerable <br />
             </label>
             <input type="radio" dir="auto" id="harm2" name="harm2" value={harm2} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm2" name="harm2" value={harm2} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="harm2" name="harm2" value={harm2} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="harm2" name="harm2" value={harm2} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm2" name="harm2" value={harm2} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm2" name="harm2" value={harm2} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="fairness2">
             Whether or not someone acted unfairly <br />
             </label>
             <input type="radio" dir="auto" id="fairness2" name="fairness2" value={fairness2} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness2" name="fairness2" value={fairness2} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="fairness2" name="fairness2" value={fairness2} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="fairness2" name="fairness2" value={fairness2} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness2" name="fairness2" value={fairness2} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness2" name="fairness2" value={fairness2} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="ingroup2">
             Whether or not someone did something to betray his or her group <br />
             </label>
             <input type="radio" dir="auto" id="ingroup2" name="ingroup2" value={ingroup2} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup2" name="ingroup2" value={ingroup2} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="ingroup2" name="ingroup2" value={ingroup2} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="ingroup2" name="ingroup2" value={ingroup2} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup2" name="ingroup2" value={ingroup2} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup2" name="ingroup2" value={ingroup2} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="authority2">
             Whether or not someone conformed to the traditions of society <br />
             </label>
             <input type="radio" dir="auto" id="authority2" name="authority2" value={authority2} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority2" name="authority2" value={authority2} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="authority2" name="authority2" value={authority2} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="authority2" name="authority2" value={authority2} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority2" name="authority2" value={authority2} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority2" name="authority2" value={authority2} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="purity2">
             Whether or not someone did something disgusting <br />
             </label>
             <input type="radio" dir="auto" id="purity2" name="purity2" value={purity2} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity2" name="purity2" value={purity2} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="purity2" name="purity2" value={purity2} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="purity2" name="purity2" value={purity2} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity2" name="purity2" value={purity2} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity2" name="purity2" value={purity2} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="harm3">
             Whether or not someone was cruel <br />
             </label>
             <input type="radio" dir="auto" id="harm3" name="harm3" value={harm3} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm3" name="harm3" value={harm3} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="harm3" name="harm3" value={harm3} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="harm3" name="harm3" value={harm3} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm3" name="harm3" value={harm3} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="harm3" name="harm3" value={harm3} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="fairness3">
             Whether or not someone was denied his or her rights <br />
             </label>
             <input type="radio" dir="auto" id="fairness3" name="fairness3" value={fairness3} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness3" name="fairness3" value={fairness3} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="fairness3" name="fairness3" value={fairness3} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="fairness3" name="fairness3" value={fairness3} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness3" name="fairness3" value={fairness3} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="fairness3" name="fairness3" value={fairness3} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="ingroup3">
             Whether or not someone showed a lack of loyalty <br />
             </label>
             <input type="radio" dir="auto" id="ingroup3" name="ingroup3" value={ingroup3} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup3" name="ingroup3" value={ingroup3} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="ingroup3" name="ingroup3" value={ingroup3} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="ingroup3" name="ingroup3" value={ingroup3} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup3" name="ingroup3" value={ingroup3} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="ingroup3" name="ingroup3" value={ingroup3} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="authority3">
             Whether or not an action caused chaos or disorder <br />
             </label>
             <input type="radio" dir="auto" id="authority3" name="authority3" value={authority3} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority3" name="authority3" value={authority3} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="authority3" name="authority3" value={authority3} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="authority3" name="authority3" value={authority3} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority3" name="authority3" value={authority3} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="authority3" name="authority3" value={authority3} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
           </p>

           <p>
             <label htmlFor="purity3">
             Whether or not someone acted in a way that God would approve of <br />
             </label>
             <input type="radio" dir="auto" id="purity3" name="purity3" value={purity3} onChange={this.handleChange} autoComplete="off" /> 0 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity3" name="purity3" value={purity3} onChange={this.handleChange} autoComplete="off" /> 1 &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="radio" dir="auto" id="purity3" name="purity3" value={purity3} onChange={this.handleChange} autoComplete="off" /> 2 &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" dir="auto" id="purity3" name="purity3" value={purity3} onChange={this.handleChange} autoComplete="off" /> 3 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity3" name="purity3" value={purity3} onChange={this.handleChange} autoComplete="off" /> 4 &nbsp;&nbsp;&nbsp;&nbsp;  
              <input type="radio" dir="auto" id="purity3" name="purity3" value={purity3} onChange={this.handleChange} autoComplete="off" /> 5 &nbsp;&nbsp;&nbsp;&nbsp; 
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
