import React from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';

import './SheetCard.css';
import samanthaLips from '../../assets/samantha_lips02.jpg';
// import SheetFields from './SheetFields.js';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const FirstField = () => (
      <section>
        <Input type='text' label='Name' maxLength={50} />
        <Input type='text' label='Player' />
        <Input type='text' label='Chronicle' />
      </section>
);

const SecondField = () => (
      <section>
        <Input type='text' label='Nature' />
        <Input type='text' label='Demeanor' />
        <Input type='text' multiline label='Concept' maxLength={90} />
      </section>
);

const ThirdField = () => (
      <section>
        <Input type='text' label='Sire' maxLength={50} />
        <Input type='text' label='Generation' />
        <Input type='text' label='Haven' />
      </section>
);

const FirstLine = () => (
  <div>
      <FirstField />
      <SecondField />
      <ThirdField />
  </div>
);

const SheetCard = () => (
  <Card style={{width: '100%'}}>
    <CardTitle
      title="World of Darkness"
      subtitle="Test sheet"
    />
    <CardMedia
      aspectRatio="wide"
      image={samanthaLips}
    />
    <CardTitle
      title="Vampire the Masquerade - Character Sheet"
    />
    <CardText>
      <FirstLine />
      <FirstLine />
    </CardText>
    <CardActions>
      <FirstField />
      <SecondField />
      <ThirdField />
    </CardActions>
  </Card>
);

export default SheetCard;
