import React from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
// import Input from 'react-toolbox/lib/input';

// import styles from './SheetCard.css';
import samanthaLips from '../../assets/samantha_lips02.jpg';
import CharacterSheetForm from './CharacterSheetForm.js';

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
      <CharacterSheetForm />
    </CardText>
    <CardActions>
      CardActions
    </CardActions>
  </Card>
);

export default SheetCard;
