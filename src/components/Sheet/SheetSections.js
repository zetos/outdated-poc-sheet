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

// TODO handleFieldChange.

// const LastSectionFieldOne = () => (
//   <div className={styles.fields}>
//     <h2>Merits/Flaws</h2> <br/>
//     <Input type='text' label='merits/flaws' />
//     <Input type='text' label='merits/flaws' />
//     <Input type='text' label='merits/flaws' />
//     <Input type='text' label='merits/flaws' />
//     <Input type='text' label='merits/flaws' />
//   </div>
// );

// const HumanityPathField = () => (
//   <Slider pinned snaps min={0} max={10} step={1} editable value={0} onChange={handleSliderChange} />
// );

// const WillpowerField = () => (
//   <div>
//     <Slider disabled pinned snaps min={0} max={10} step={1} editable value={0} onChange={handleSliderChange} />
//     <Slider pinned snaps min={0} max={10} step={1} editable value={0} onChange={handleSliderChange} />
//   </div>
// );

// const BloodPollField = () => (
//   <Slider pinned snaps min={0} max={20} step={1} editable value={0} onChange={handleSliderChange} />
// );

// const LastSectionFieldTwo = () => (
//   <div className={styles.fields}>
//     <h2>Humanity/Path</h2> <br />
//     <HumanityPathField />
//     <h2>Willpower</h2> <br />
//     <WillpowerField />
//     <h2>Blood Pool</h2> <br />
//     <BloodPollField />
//   </div>
// );

// const HealthField = () => {
//   const handleHealthChange = () => {
//     console.log('handleHealthChange clicked');
//   };

//   const healthLevels = [
//     {value: 'Bruised', label: 'Bruised'},
//     {value: 'Hurt', label: 'Hurt -1'},
//     {value: 'Injured', label: 'Injured -1'},
//     {value: 'Wounded', label: 'Wounded -2'},
//     {value: 'Mauled', label: 'Mauled -2'},
//     {value: 'Crippled', label: 'Crippled -5'},
//     {value: 'Incapacitaed', label: 'Incapacitaed'},
//   ];

//   return (
//   <Dropdown
//     source={healthLevels}
//     onChange={handleHealthChange}
//     value={healthLevels[0].value}
//   />
//   );
// };

// const WeaknessField = () => (
//   <Input type='text' label='weakness' />
// );

// const LastSectionFieldThree = () => (
//   <div className={styles.fields}>
//     <h2>Health</h2> <br />
//     <HealthField />
//     <h2>Weakness</h2> <br />
//     <WeaknessField />
//   </div>
// );

// const LastSection = () => (
//   <div>
//       <section>
//         <LastSectionFieldOne />
//         <LastSectionFieldTwo />
//         <LastSectionFieldThree />
//       </section>
//   </div>
// );

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
