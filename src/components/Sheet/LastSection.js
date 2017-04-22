import React, {PropTypes} from 'react';
import Input from 'react-toolbox/lib/input';
import Slider from 'react-toolbox/lib/slider';
import Dropdown from 'react-toolbox/lib/dropdown';

import styles from './SheetSections.css';

 const healthLevels = [ // TODO transform healthLevels into a prop.
    {value: 'Bruised', label: 'Bruised'},
    {value: 'Hurt', label: 'Hurt -1'},
    {value: 'Injured', label: 'Injured -1'},
    {value: 'Wounded', label: 'Wounded -2'},
    {value: 'Mauled', label: 'Mauled -2'},
    {value: 'Crippled', label: 'Crippled -5'},
    {value: 'Incapacitaed', label: 'Incapacitaed'},
  ];

const LastSectionFieldOne = () => (
  <div className={styles.fields}>
    <h2>Merits/Flaws</h2> <br/>
    <Input type='text' label='merits/flaws' />
    <Input type='text' label='merits/flaws' />
    <Input type='text' label='merits/flaws' />
    <Input type='text' label='merits/flaws' />
    <Input type='text' label='merits/flaws' />
  </div>
);

const HumanityPathField = ({handleSliderChange}) => (
  <Slider pinned snaps min={0} max={10} step={1} editable value={0} onChange={handleSliderChange} />
);

HumanityPathField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const WillpowerField = ({handleSliderChange}) => (
  <div>
    <Slider disabled pinned snaps min={0} max={10} step={1} editable value={0} onChange={handleSliderChange} />
    <Slider pinned snaps min={0} max={10} step={1} editable value={0} onChange={handleSliderChange} />
  </div>
);

WillpowerField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const BloodPollField = ({handleSliderChange}) => (
  <Slider pinned snaps min={0} max={20} step={1} editable value={0} onChange={handleSliderChange} />
);

BloodPollField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const LastSectionFieldTwo = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Humanity/Path</h2> <br />
    <HumanityPathField handleSliderChange={handleSliderChange} />
    <h2>Willpower</h2> <br />
    <WillpowerField handleSliderChange={handleSliderChange} />
    <h2>Blood Pool</h2> <br />
    <BloodPollField handleSliderChange={handleSliderChange} />
  </div>
);

LastSectionFieldTwo.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const HealthField = ({handleHealthChange, healthLevels}) => (
  <Dropdown
    source={healthLevels}
    onChange={handleHealthChange}
    value={healthLevels[0].value}
  />
);

HealthField.propTypes = {
  handleHealthChange: PropTypes.func.isRequired,
  healthLevels: PropTypes.array.isRequired,
};

const WeaknessField = () => (
  <Input type='text' label='weakness' />
);

const LastSectionFieldThree = ({healthLevels, handleHealthChange}) => (
  <div className={styles.fields}>
    <h2>Health</h2> <br />
    <HealthField healthLevels={healthLevels} handleHealthChange={handleHealthChange} />
    <h2>Weakness</h2> <br />
    <WeaknessField />
  </div>
);

LastSectionFieldThree.propTypes = {
    handleHealthChange: PropTypes.func.isRequired,
    healthLevels: PropTypes.array.isRequired,
};

const LastSection = ({handleSliderChange, handleHealthChange}) => (
  <div>
      <section>
        <LastSectionFieldOne handleSliderChange={handleSliderChange} />
        <LastSectionFieldTwo handleSliderChange={handleSliderChange} />
        <LastSectionFieldThree healthLevels={healthLevels} handleHealthChange={handleHealthChange} />
      </section>
  </div>
);

LastSection.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
  handleHealthChange: PropTypes.func.isRequired,
};

export default LastSection;
