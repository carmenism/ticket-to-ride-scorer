
import * as React from 'react';

export interface TrainProps {
  handleChange: (event: any) => void;
  length: number;
  name: string;
  value: number;
}

const PlayerForm: React.SFC<TrainProps> = (props) => {
  const trainMin: number = 0;
  const trainMax: number = 15;

  return (
    <label>
      {props.length}:
      <input
        type="number"
        name={props.name}
        value={props.value}
        onBlur={props.handleChange}
        onInput={props.handleChange}
        onChange={props.handleChange}
        min={trainMin}
        max={trainMax}
      />
    </label>
  );
};

export default PlayerForm;
