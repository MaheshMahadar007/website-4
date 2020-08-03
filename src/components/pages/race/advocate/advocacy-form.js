import React from 'react'
import { Form, Input, Select, Textarea } from '~components/common/form'

export default () => {
  return (
    <Form
      method="POST"
      name="crdt-advocacy"
      action="/todo/set-this-value"
      netlify-honeypot="covid-bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="crdt-advocacy" />

      <Select
        label="Which state do you want to get better race and ethnicity data for?"
        name="state"
        id="state"
        options={[
          '-- Select a state --',
          'todo',
          'pull',
          'from API',
          'in the ',
          'future',
        ]}
        isRequired
      />

      <Input
        label="First name"
        type="text"
        name="first-name"
        id="first-name"
        isRequired
      />

      <Input
        label="Last name"
        type="text"
        name="last-name"
        id="last-name"
        isRequired
      />

      <Input
        label="Email address"
        type="email"
        name="email"
        id="email"
        isRequired
      />

      <Select
        label="Contact method used"
        name="contact-method"
        id="contact-method"
        options={[
          '-- Select a contact method --',
          'Email',
          'Phone',
          "Form on state's website",
          'Other',
        ]}
      />

      <Textarea
        label="How did your experience go? Did you recieve a response?"
        inputtype="text"
        name="experience"
        id="experience"
        rows="5"
      />

      <div style={{ display: 'none' }}>
        <label htmlFor="covid-bot-field">
          If you are a human, don&#8217;t fill out this field:
          <input type="text" name="covid-bot-field" id="covid-bot-field" />
        </label>
      </div>

      <button type="submit">Submit</button>
    </Form>
  )
}
