import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-toolbox/lib/slider';

import styles from './SheetSections.css';

const TalentsField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Talents</h2> <br/>
     <p>Alertness</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Athletics</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Brawl</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Dodge</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Empathy</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Expression</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Intimidation</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Leadership</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Streetwise</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Subterfuge</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
  </div>
);

TalentsField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const SkillsField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Skills</h2> <br/>
     <p>Animal Ken</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Crafts</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Drive</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Etiquette</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Firearms</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Melee</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Performance</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Security</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Stealth</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Survival</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
  </div>
);

SkillsField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const KnowledgesField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Knowledges</h2> <br/>
     <p>Academics</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Computer</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Finance</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Investigation</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Law</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Linguistics</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Medicine</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Occult</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Politics</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
     <p>Science</p> <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
  </div>
);

KnowledgesField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const Abilities = ({handleSliderChange}) => (
  <div>
      <h1> Abilities </h1>
      <section>
        <TalentsField handleSliderChange={handleSliderChange} />
        <SkillsField handleSliderChange={handleSliderChange} />
        <KnowledgesField handleSliderChange={handleSliderChange} />
      </section>
  </div>
);

Abilities.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

export default Abilities;
