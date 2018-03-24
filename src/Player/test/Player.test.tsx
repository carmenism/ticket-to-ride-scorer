import * as React from 'react';
import { shallow } from 'enzyme';
import Player from '../component/Player';

describe('Player', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
        <Player
          color="black"
        />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});