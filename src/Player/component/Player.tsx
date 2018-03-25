import * as React from 'react';
import { PlayerScore } from '../model';
import PlayerForm from './PlayerForm';

export interface PlayerProps {
  color: string;
}

export interface PlayerState extends PlayerScore {
  score: number;
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
      numberUnusedStations: 0,
      score: 0,
      longestRoute: false
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: any): void {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(
      {
        [name]: value,
        score: this.calculateScore()
      },
      // tslint:disable-next-line:no-console
      () => { console.log(this.state.score); });
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
      <>
      <PlayerForm
        numberTrainsLength1={this.state.numberTrainsLength1}
        numberTrainsLength2={this.state.numberTrainsLength2}
        numberTrainsLength3={this.state.numberTrainsLength3}
        numberTrainsLength4={this.state.numberTrainsLength4}
        numberTrainsLength5={this.state.numberTrainsLength5}
        numberTrainsLength6={this.state.numberTrainsLength6}
        numberTrainsLength8={this.state.numberTrainsLength8}
        routesAchieved={this.state.routesAchieved}
        routesMissed={this.state.routesAchieved}
        numberUnusedStations={this.state.numberUnusedStations}
        longestRoute={this.state.longestRoute}
        handleChange={this.handleChange}
      />
      {this.state.score}
      </>
    );
  }
}

export default Player;
