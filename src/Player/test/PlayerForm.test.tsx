import * as React from 'react';
import { shallow } from 'enzyme';
import PlayerForm from '../component/PlayerForm';

describe('PlayerForm', () => {
  let wrapper: any;
  const handleChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <PlayerForm
        numberTrainsLength1={1}
        numberTrainsLength2={3}
        numberTrainsLength3={2}
        numberTrainsLength4={0}
        numberTrainsLength5={1}
        numberTrainsLength6={0}
        numberTrainsLength8={0}
        routesAchieved={[]}
        routesMissed={[]}
        numberUnusedStations={3}
        longestRoute={false}
        handleChange={handleChange}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
