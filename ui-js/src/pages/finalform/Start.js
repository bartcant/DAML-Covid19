import React from 'react'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import Select from 'react-select'
import states from './states'

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
)



const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async covid19testdata => {
  sleep(300);
  window.alert(JSON.stringify(covid19testdata, 0, 2));


  // I need to pass the data of 'covid19testdata' to the Covid19test.js so this information can be used for another function
  // most likely that can be done through props or this.state
}

const required = value => (value ? undefined : 'Required')

export default class StartForm extends React.Component {

  //Not sure if best to use a class or export default
  
render () {
return(
    
<MuiThemeProvider muiTheme={getMuiTheme()}>
    <Styles>
      <h1> React Final Form Example</h1>
      <h2>Third Party Components</h2>
      <a href="https://github.com/erikras/react-final-form#-react-final-form">
        Read Docs
      </a>
     

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, covid19testdata }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="testdate"
                component={TextFieldAdapter}
                hintText="TestDate"
                floatingLabelText="Test Date"
              />
            </div>

            <div>
              <Field
                name="issuedby"
                component={TextFieldAdapter}
                validate={required}
                hintText="Issued By"
                floatingLabelText="Issued By"
              />
            </div>
            <div>
              <Field
                name="testtype"
                component={TextFieldAdapter}
                validate={required}
                hintText="Test Type"
                floatingLabelText="Test Type"
              />
            </div>
            <div>
              <Field
                name="testnumber"
                component={TextFieldAdapter}
                validate={required}
                hintText="Test Number"
                floatingLabelText="Test Number"
              />
            </div>
            <div>
              <Field
                name="restresult"
                component={TextFieldAdapter}
                validate={required}
                hintText="Test Result"
                floatingLabelText="Test Result"
              />
            </div>

            <div>
              <Field
                name="locationstate"
                component={ReactSelectAdapter}
                options={states}
              />
            </div>
            
            <div>
              <Field
                name="testupdatedata"
                component={TextFieldAdapter}
                hintText="Test Update Date"
                floatingLabelText="TestUpdate Date"
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
            <pre>{JSON.stringify(covid19testdata, 0, 2)}</pre>
            //This is no longer working//
          </form>
           )}
           />
         </Styles>
       </MuiThemeProvider>
     )


ReactDOM.render(
 <StartForm />, 
  document.getElementById('content')

)
}
}