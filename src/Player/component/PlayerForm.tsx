
import * as React from 'react';
import { PlayerScore } from '../model';
import Train from './Train';

export interface PlayerFormProps extends PlayerScore {
  handleChange: (event: any) => void;
}

const PlayerForm: React.SFC<PlayerFormProps> = (props) => {
  const trains: any[] = [
    {
      length: 1,
      value: props.numberTrainsLength1,
      name: 'numberTrainsLength1'
    }, {
      length: 2,
      value: props.numberTrainsLength2,
      name: 'numberTrainsLength2'
    }, {
      length: 3,
      value: props.numberTrainsLength3,
      name: 'numberTrainsLength3'
    }, {
      length: 4,
      value: props.numberTrainsLength4,
      name: 'numberTrainsLength4'
    }, {
      length: 5,
      value: props.numberTrainsLength5,
      name: 'numberTrainsLength5'
    }, {
      length: 6,
      value: props.numberTrainsLength6,
      name: 'numberTrainsLength6'
    }, {
      length: 8,
      value: props.numberTrainsLength8,
      name: 'numberTrainsLength8'
    },
  ];

  return (
    <form onSubmit={this.handleSubmit}>
      {
        trains.map((train, i) => 
          <Train
            handleChange={props.handleChange}
            length={train.length}
            name={train.name}
            value={train.value}
            key={train.name}
          />
        )
      }
    </form>
  );
};

export default PlayerForm;
