import React from 'react';

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

const SheetSections = () => (
    <div>
      <FirstSection />
      <AttributesSection handleSliderChange={handleSliderChange} />
      <Abilities handleSliderChange={handleSliderChange} />
      <Advantages handleSliderChange={handleSliderChange}/>
      <LastSection handleSliderChange={handleSliderChange} handleHealthChange={handleHealthChange} />
    </div>
);

export default SheetSections;
