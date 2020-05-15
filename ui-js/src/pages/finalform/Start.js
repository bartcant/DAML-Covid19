import React from 'react'
// import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
// import Toggle from 'material-ui/Toggle'
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

// const ToggleAdapter = ({ input: { onChange, value }, label, ...rest }) => (
//  <Toggle
//    label={label}
//    toggled={!!value}
//   onToggle={(event, isInputChecked) => onChange(isInputChecked)}
//    {...rest}
//  />
//)

const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
const required = value => (value ? undefined : 'Required')

class StartForm extends React.Component {



render() {
  return (
<MuiThemeProvider muiTheme={getMuiTheme()}>
    <Styles>
      <h1> React Final Form Example</h1>
      <h2>Third Party Components</h2>
      <a href="https://github.com/erikras/react-final-form#-react-final-form">
        Read Docs
      </a>
      <div>
        This example uses{' '}
        <a href="https://github.com/JedWatson/react-select">React Select</a> and{' '}
        <a href="http://www.material-ui.com">Material UI</a>.
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                name="Test Number"
                component={TextFieldAdapter}
                validate={required}
                hintText="Test Number"
                floatingLabelText="Test Number"
              />
            </div>
            <div>
              <Field
                name="Test Result"
                component={TextFieldAdapter}
                validate={required}
                hintText="Test Result"
                floatingLabelText="Test Result"
              />
            </div>


            <div>
              <Field
                name="state"
                component={ReactSelectAdapter}
                options={states}
              />
            </div>
            <div>
              
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
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  </MuiThemeProvider>
)

};
        
}
export default StartForm; 