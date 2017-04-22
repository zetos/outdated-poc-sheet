import React, {PropTypes} from 'react';
import Input from 'react-toolbox/lib/input';
import Slider from 'react-toolbox/lib/slider';

import styles from './SheetSections.css';

const BackgroundsField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Backgrounds</h2> <br/>
    <Input type='text' label='background' />
    <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
    <Input type='text' label='background' />
    <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
    <Input type='text' label='background' />
    <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
  </div>
);

BackgroundsField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const DisciplinesField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Disciplines</h2> <br/>
    <Input type='text' label='discipline' />
    <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
    <Input type='text' label='discipline' />
    <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
    <Input type='text' label='discipline' />
    <Slider pinned snaps min={0} max={5} step={1} editable value={0} onChange={handleSliderChange} />
  </div>
);

DisciplinesField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const VirtuesField = ({handleSliderChange}) => (
  <div className={styles.fields}>
    <h2>Virtues</h2> <br/>
    <p>Conscience/Conviction</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
    <p>Self-Control/Instinct</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
    <p>Courage</p> <Slider pinned snaps min={1} max={5} step={1} editable value={1} onChange={handleSliderChange} />
  </div>
);

VirtuesField.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

const Advantages = ({handleSliderChange}) => (
  <div>
      <h1> Advantages </h1>
      <section>
        <BackgroundsField handleSliderChange={handleSliderChange} />
        <DisciplinesField handleSliderChange={handleSliderChange} />
        <VirtuesField handleSliderChange={handleSliderChange} />
      </section>
  </div>
);

Advantages.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
};

export default Advantages;
