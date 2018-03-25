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

  describe('Method sumArray()', () => {
    describe('When passed an empty array', () => {
      it('Returns zero', () => {
        expect(wrapper.instance().sumArray([])).toBe(0);
      });
    });

    describe('When passed an array of zeros', () => {
      it('Returns zero', () => {
        expect(wrapper.instance().sumArray([0, 0, 0, 0, 0])).toBe(0);
      });
    });

    describe('When passed an array of ones', () => {
      it('Returns a value equal to the length', () => {
        const arr: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1];

        expect(wrapper.instance().sumArray(arr)).toBe(arr.length);
      });
    });

    describe('When passed an array with a single value', () => {
      it('Returns that single value', () => {
        const arr: number[] = [25];

        expect(wrapper.instance().sumArray(arr)).toBe(25);
      });
    });

    describe('When passed an array with a various positive values', () => {
      it('Returns a positive sum', () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6];

        expect(wrapper.instance().sumArray(arr)).toBe(21);
      });
    });

    describe('When passed an array with a various negative values', () => {
      it('Returns a negative sum', () => {
        const arr: number[] = [-1, -2, -3, -4, -5, -6];

        expect(wrapper.instance().sumArray(arr)).toBe(-21);
      });
    });
  });

  describe('Method calculateSubScoreTrains', () => {
    describe('When there no trains', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 0', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(0);
      });
    });

    describe('When there is only one train of length 1', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 1,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 1', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(1);
      });
    });

    describe('When there is only one train of length 2', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 1,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 2', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(2);
      });
    });

    describe('When there is only one train of length 3', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 1,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 4', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(4);
      });
    });

    describe('When there is only one train of length 4', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 1,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 7', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(7);
      });
    });

    describe('When there is only one train of length 5', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 1,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 10', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(10);
      });
    });

    describe('When there is only one train of length 6', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 1,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 15', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(15);
      });
    });

    describe('When there is only one train of length 8', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 1,
        });
      });

      it('Returns 21', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(21);
      });
    });

    describe('When there is one train of each length', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 1,
          numberTrainsLength2: 1,
          numberTrainsLength3: 1,
          numberTrainsLength4: 1,
          numberTrainsLength5: 1,
          numberTrainsLength6: 1,
          numberTrainsLength8: 1,
        });
      });

      it('Returns 60', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(60);
      });
    });

    describe('When there are various number of trains', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 5,
          numberTrainsLength2: 2,
          numberTrainsLength3: 4,
          numberTrainsLength4: 3,
          numberTrainsLength5: 0,
          numberTrainsLength6: 1,
          numberTrainsLength8: 0,
        });
      });

      it('Returns 61', () => {
        expect(wrapper.instance().calculateSubScoreTrains()).toBe(61);
      });
    });
  });

  describe('Method calculateSubScoreRoutes', () => {
    describe('When there are neither routes achieved nor missed', () => {
      beforeEach(() => {
        wrapper.setState({
          routesAchieved: [],
          routesMissed: []
        });
      });

      it('Returns zero', () => {
        expect(wrapper.instance().calculateSubScoreRoutes()).toBe(0);
      });
    });

    describe('When there are only routes achieved', () => {
      beforeEach(() => {
        wrapper.setState({
          routesAchieved: [5, 10, 15, 20],
          routesMissed: []
        });
      });

      it('Returns the sum of the routes achieved', () => {
        expect(wrapper.instance().calculateSubScoreRoutes()).toBe(50);
      });
    });

    describe('When there are only routes missed', () => {
      beforeEach(() => {
        wrapper.setState({
          routesAchieved: [],
          routesMissed: [5, 10, 15, 20]
        });
      });

      it('Returns the negative sum of the routes missed', () => {
        expect(wrapper.instance().calculateSubScoreRoutes()).toBe(-50);
      });
    });

    describe('When there are more routes achieved than missed', () => {
      beforeEach(() => {
        wrapper.setState({
          routesAchieved: [5, 10, 15, 20],
          routesMissed: [12]
        });
      });

      it('Returns a positive sum', () => {
        expect(wrapper.instance().calculateSubScoreRoutes()).toBe(38);
      });
    });

    describe('When there are more routes missed than achieved', () => {
      beforeEach(() => {
        wrapper.setState({
          routesAchieved: [12, 24],
          routesMissed: [5, 10, 15, 20]
        });
      });

      it('Returns a negative sum', () => {
        expect(wrapper.instance().calculateSubScoreRoutes()).toBe(-14);
      });
    });
  });

  describe('Method calculateSubScoreStationBonus()', () => {
    describe('When there are zero unused stations', () => {
      beforeEach(() => {
        wrapper.setState({
          numberUnusedStations: 0
        });
      });
      
      it('Returns 0', () => {
        expect(wrapper.instance().calculateSubScoreStationBonus()).toBe(0);
      });
    });

    describe('When there is one unused station', () => {
      beforeEach(() => {
        wrapper.setState({
          numberUnusedStations: 1
        });
      });
      
      it('Returns 4', () => {
        expect(wrapper.instance().calculateSubScoreStationBonus()).toBe(4);
      });
    });

    describe('When there are two unused stations', () => {
      beforeEach(() => {
        wrapper.setState({
          numberUnusedStations: 2
        });
      });
      
      it('Returns 8', () => {
        expect(wrapper.instance().calculateSubScoreStationBonus()).toBe(8);
      });
    });

    describe('When there are three unused stations', () => {
      beforeEach(() => {
        wrapper.setState({
          numberUnusedStations: 3
        });
      });
      
      it('Returns 12', () => {
        expect(wrapper.instance().calculateSubScoreStationBonus()).toBe(12);
      });
    });
  });

  describe('Method calculateScore()', () => {
    describe('When everything is set to zero', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
          routesAchieved: [],
          routesMissed: [],
          numberUnusedStations: 0,
          longestRoute: false
        });
      });

      it('Returns 0', () => {
        expect(wrapper.instance().calculateScore()).toBe(0);
      });
    });

    describe('When everything is set to zero with longest route', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 0,
          numberTrainsLength2: 0,
          numberTrainsLength3: 0,
          numberTrainsLength4: 0,
          numberTrainsLength5: 0,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
          routesAchieved: [],
          routesMissed: [],
          numberUnusedStations: 0,
          longestRoute: true
        });
      });

      it('Returns 10', () => {
        expect(wrapper.instance().calculateScore()).toBe(10);
      });
    });

    describe('When there are one train of each length and only missed routes', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 1,
          numberTrainsLength2: 1,
          numberTrainsLength3: 1,
          numberTrainsLength4: 1,
          numberTrainsLength5: 1,
          numberTrainsLength6: 1,
          numberTrainsLength8: 1,
          routesAchieved: [],
          routesMissed: [5, 5, 10, 10],
          numberUnusedStations: 3,
          longestRoute: false
        });
      });

      it('Returns 42', () => {
        expect(wrapper.instance().calculateScore()).toBe(42);
      });
    });

    describe('When there are one train of each length and no missed routes', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 1,
          numberTrainsLength2: 1,
          numberTrainsLength3: 1,
          numberTrainsLength4: 1,
          numberTrainsLength5: 1,
          numberTrainsLength6: 1,
          numberTrainsLength8: 1,
          routesAchieved: [5, 5, 10, 10],
          routesMissed: [],
          numberUnusedStations: 3,
          longestRoute: false
        });
      });

      it('Returns 102', () => {
        expect(wrapper.instance().calculateScore()).toBe(102);
      });
    });

    describe('When there are one train of each length and no missed routes with longest route', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 1,
          numberTrainsLength2: 1,
          numberTrainsLength3: 1,
          numberTrainsLength4: 1,
          numberTrainsLength5: 1,
          numberTrainsLength6: 1,
          numberTrainsLength8: 1,
          routesAchieved: [5, 5, 10, 10],
          routesMissed: [],
          numberUnusedStations: 3,
          longestRoute: true
        });
      });

      it('Returns 102', () => {
        expect(wrapper.instance().calculateScore()).toBe(112);
      });
    });

    describe('When there are some values without longest route', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 4,
          numberTrainsLength2: 3,
          numberTrainsLength3: 2,
          numberTrainsLength4: 2,
          numberTrainsLength5: 1,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
          routesAchieved: [5, 10, 10, 12, 8],
          routesMissed: [5, 16],
          numberUnusedStations: 2,
          longestRoute: false
        });
      });

      it('Returns 74', () => {
        expect(wrapper.instance().calculateScore()).toBe(74);
      });
    });

    describe('When there are some values with longest route', () => {
      beforeEach(() => {
        wrapper.setState({
          numberTrainsLength1: 4,
          numberTrainsLength2: 3,
          numberTrainsLength3: 2,
          numberTrainsLength4: 2,
          numberTrainsLength5: 1,
          numberTrainsLength6: 0,
          numberTrainsLength8: 0,
          routesAchieved: [5, 10, 10, 12, 8],
          routesMissed: [5, 16],
          numberUnusedStations: 2,
          longestRoute: true
        });
      });

      it('Returns 84', () => {
        expect(wrapper.instance().calculateScore()).toBe(84);
      });
    });
  });
});
