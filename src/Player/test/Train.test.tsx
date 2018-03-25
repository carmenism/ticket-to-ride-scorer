import * as React from 'react';
import { shallow } from 'enzyme';
import Train from '../component/Train';

describe('Train', () => {
  let wrapper: any;
  const handleChange = jest.fn();
  const name: string = 'numberTrainsLength1';

  beforeEach(() => {
    wrapper = shallow(
      <Train
        handleChange={handleChange}
        length={1}
        name={name}
        value={4}
        key={name}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
