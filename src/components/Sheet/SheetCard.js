import React from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
// import Input from 'react-toolbox/lib/input';

// import styles from './SheetCard.css';
import samanthaLips from '../../assets/samantha_lips02.jpg';
import SheetSections from './SheetSections.js';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

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
      <SheetSections />
    </CardText>
    <CardActions>
      CardActions
      {dummyText}
    </CardActions>
  </Card>
);

export default SheetCard;
