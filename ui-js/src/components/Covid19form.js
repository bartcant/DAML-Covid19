
import React from "react"; 

class Covid19Form extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        issuedby: "AtriumHealth"
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) { 
      // console.log ("contract ID" + contractId);
      console.log ("test date" + this.state.testdate);
      console.log ("issued by" + this.state.issuedby);


    }



    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
         
          <label>
            Test Date:
            <input
              margin="dense"
              name="testdate"
              type="date"
              value={this.state.testdate}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
            Issued By:
            <input
              margin="dense"
              name="issuedby"
              type="text"
              value={this.state.issuedby}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
        <label>
            Test Type:
            <input
              margin="dense"
              name="testype"
              type="text"
              value={this.state.testtype}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
        <label>
            Test Number:
            <input
              margin="dense"
              name="testype"
              type="number"
              value={this.state.testnumber}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
            Test Result:
            <input
              margin="dense"
              name="testype"
              type="text"
              value={this.state.testresult}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <label>
            LocationState:
            <select 
             margin="dense"
             name="locationstate"
            value={this.state.locationstate} onChange={this.handleInputChange}>
              <option value="NC">North Carolina</option>
              <option value="SC">South Carolina</option>
              <option value="GA">Georgia</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Test Update Date:
            <input
              margin="dense"
              name="testupdatedate"
              type="date"
              value={this.state.testupdatedata}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }; 

  export default Covid19Form; 