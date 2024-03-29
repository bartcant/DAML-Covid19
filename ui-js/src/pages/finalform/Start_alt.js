import React from 'react'
// import { render } from 'react-dom'
//import ReactDOM from 'react-dom';
import Styles from './Styles'
import {Form }  from 'react-final-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
// import Select from 'react-select'
import states from './states'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { useLedger } from "@daml/react";
import { Main } from "@daml2js/Covid19-0.0.1/";
// redux connect
import { connect } from 'react-redux'

/* const TextFieldAdapter = ({ input, meta, value, handleChange, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    value={value}
    onChange={(event, value) => handleChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
)

const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const required = value => (value ? undefined : 'Required') */

function StartForm({conduct}) {
  const ledger = useLedger();

  const [covid19testdata, setConductForm] = React.useState({
    testdate: '',
    citizen: conduct.citizen,
    healthclinic: conduct.healthclinic,
    testtype: '',
    testnumber: '',
    testresult: '',
    locationstate: '',
    testupdatedata: ''
  });

  const handleConductChange = (idx, event) => {
    setConductForm({
      ...covid19testdata,
      [idx]: event.target.value
    })
  }

  const onSubmit = function () {
    console.log("healthclinic : " + conduct.healthclinic);
    console.log("citizen : " + conduct.citizen);
    console.log("cid: " + conduct.contractId);
    console.log(covid19testdata)

    const healthclinic = conduct.healthclinic;

    ledger.exercise(Main.TestAppointment.Covid19TestAppointment, conduct.contractId, {covid19testdata, healthclinic});
  }

  const getStates = () => {
    return states.map((each) => {
      return <MenuItem key={each.value} value={each.value}>{each.label}</MenuItem>
    });
  }

  return(

    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Styles>
        <h1> Covid19Test</h1>


      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="TestDate"
                placeholder="TestDate"
                value={covid19testdata.testdate}
                onChange={(e) => handleConductChange('testdate', e)}
              />
            </div>

            <div>
              <TextField
                label="Test Type"
                placeholder="Test Type"
                value={covid19testdata.testtype}
                onChange={(e) => handleConductChange('testtype', e)}
              />
            </div>
            <div>
              <TextField
                label="Test Number"
                placeholder="Test Number"
                value={covid19testdata.testnumber}
                onChange={(e) => handleConductChange('testnumber', e)}
              />
            </div>
            <div>
              <TextField
                label="Test Result"
                placeholder="Test Result"
                value={covid19testdata.testresult}
                onChange={(e) => handleConductChange('testresult', e)}
              />
            </div>

            <div>
              <Select
                labelId="demo-simple-select-label"
                value={covid19testdata.locationstate}
                onChange={(e) => handleConductChange('locationstate', e)}
              >
                { getStates() }
              </Select>
            </div>

            <div>
              <TextField
                label="Test Update Date"
                placeholder="Test Update Date"
                value={covid19testdata.testupdatedata}
                onChange={(e) => handleConductChange('testupdatedata', e)}
              />

            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit Test Results
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
           )}
        />
      </Styles>
    </MuiThemeProvider>
  )
}

function mapStateToProps(state) {
  return { conduct: state.conduct };
}

export default connect( mapStateToProps)(StartForm);
