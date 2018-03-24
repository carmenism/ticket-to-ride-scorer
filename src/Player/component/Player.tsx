import * as React from 'react';

export interface PlayerProps {
  color: string;
}

export interface PlayerState {
  numberTrainsLength1: number;
  numberTrainsLength2: number;
  numberTrainsLength3: number;
  numberTrainsLength4: number;
  numberTrainsLength5: number;
  numberTrainsLength6: number;
  numberTrainsLength8: number;
  routesAchieved: number[];
  routesMissed: number[];
  numberUnusedStations: number;
  finalScore: number;
  longestRoute: boolean;
}

class Player extends React.Component<PlayerProps, PlayerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      numberTrainsLength1: 0,
      numberTrainsLength2: 0,
      numberTrainsLength3: 0,
      numberTrainsLength4: 0,
      numberTrainsLength5: 0,
      numberTrainsLength6: 0,
      numberTrainsLength8: 0,
      routesAchieved: [],
      routesMissed: [],
      numberUnusedStations: 3,
      finalScore: 0,
      longestRoute: false
    };
  }

  public sumArray(arr: number[]): number {
    let sum = 0;

    if (arr != null && arr.length > 0) {      
      arr.forEach((x: number) => sum += x);
    }

    return sum;
  }

  public calculateSubScoreTrains(): number {
    let score = 0;

    score += this.state.numberTrainsLength1 * 1;
    score += this.state.numberTrainsLength2 * 2;
    score += this.state.numberTrainsLength3 * 4;
    score += this.state.numberTrainsLength4 * 7;
    score += this.state.numberTrainsLength5 * 10;
    score += this.state.numberTrainsLength6 * 15;
    score += this.state.numberTrainsLength8 * 21;

    return score;
  }

  public calculateSubScoreRoutes(): number {
    let score = 0;

    score += this.sumArray(this.state.routesAchieved);
    score -= this.sumArray(this.state.routesMissed);

    return score;
  }

  public calculateSubScoreStationBonus(): number {
    return 4 * this.state.numberUnusedStations;
  }

  public calculateScore(): number {
    let score = 0;

    score += this.calculateSubScoreTrains();
    score += this.calculateSubScoreRoutes();
    score += this.calculateSubScoreStationBonus();

    if (this.state.longestRoute) {
      score += 10;
    }

    return score;
  }

  public render(): JSX.Element {
    return (
      <div className={'player-' + this.props.color}>
        <input />
      </div>
    );
  }
}

export default Player;
