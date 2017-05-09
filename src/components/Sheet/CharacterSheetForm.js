import React from 'react';
import { Field, reduxForm } from 'redux-form';

import FirstSection from './FirstSection';
import AttributesSection from './AttributesSection';
import Abilities from './Abilities';
import Advantages from './Advantages';
import LastSection from './LastSection';

const handleSliderChange = (id, newValue) => {
  console.log('handleSliderChange clicked');
};

const handleHealthChange = () => {
  console.log('handleHealthChange clicked');
};

const submit = (values) =>{
  console.log('Satanic submit values: ', values);
}

const CharacterSheetFormFunc = ({handleSubmit}) => (
    <form onSubmit={handleSubmit(submit)}>
      
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>

      {/*<FirstSection />
      <AttributesSection handleSliderChange={handleSliderChange} />
      <Abilities handleSliderChange={handleSliderChange} />
      <Advantages handleSliderChange={handleSliderChange}/>
      <LastSection handleSliderChange={handleSliderChange} handleHealthChange={handleHealthChange} />*/}


        <button type="submit">Submit</button>
    </form>
);

// Decorate the form component
const CharacterSheetForm = reduxForm({
  form: 'characterSheet' // a unique name for this form
})(CharacterSheetFormFunc);

export default CharacterSheetForm;
