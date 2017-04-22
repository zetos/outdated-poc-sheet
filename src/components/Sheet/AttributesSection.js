import React, {PropTypes} from 'react';
import Slider from 'react-toolbox/lib/slider';

import styles from './SheetSections.css';

const PhysicalField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Physical</h2>
     <p>Strenght</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
     <p>Dexterity</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
     <p>Stamina</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
  </div>
);

PhysicalField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const SocialField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Social</h2>
     <p>Charisma</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
     <p>Manipulation</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
     <p>Appearance</p> <Slider pinned snaps min={0} max={5} step={1} editable value={1} onChange={handleSliderChange} />
  </div>
);

SocialField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const MentalField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Mental</h2>
     <p>Perception</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
     <p>Inteligence</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
     <p>Wits</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
  </div>
);

MentalField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const AttributesSection = ({handleSliderChange}) => (
  <div>
      <h1> Attributes </h1>
      <section>
        <PhysicalField handleSliderChange={handleSliderChange}/>
        <SocialField handleSliderChange={handleSliderChange}/>
        <MentalField handleSliderChange={handleSliderChange}/>
      </section>
  </div>
);

AttributesSection.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

export default AttributesSection;
