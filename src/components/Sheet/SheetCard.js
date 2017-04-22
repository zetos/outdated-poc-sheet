import React from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
// import Input from 'react-toolbox/lib/input';

// import styles from './SheetCard.css';
import samanthaLips from '../../assets/samantha_lips02.jpg';
import SheetSections from './SheetSections.js';

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
    </CardActions>
  </Card>
);

export default SheetCard;
