import React from 'react';
import Input from 'react-toolbox/lib/input';

import styles from './CharacterSheetForm.css';

const FirstSectionFieldOne = () => (
      <div className={styles.fields}>
        <Input type='text' label='Name' maxLength={50} />
        <Input type='text' label='Player' />
        <Input type='text' label='Chronicle' />
      </div>
);

const FirstSectionFieldTwo = () => (
      <div className={styles.fields}>
        <Input type='text' label='Nature' />
        <Input type='text' label='Demeanor' />
        <Input type='text' label='Concept' maxLength={90} />
      </div>
);

const FirstSectionFieldThree = () => (
      <div className={styles.fields}>
        <Input type='text' label='Generation' />
        <Input type='text' label='Sire' />
        <Input type='text' label='Haven' />
      </div>
);

const FirstSection = () => (
  <section>
      <FirstSectionFieldOne />
      <FirstSectionFieldTwo />
      <FirstSectionFieldThree />
  </section>
);

export default FirstSection;
