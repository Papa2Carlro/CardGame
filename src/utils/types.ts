export type Back = 'abstract' | 'abstract_clouds' | 'abstract_scene' | 'astronaut' | 'blue' | 'blue2' | 'cars' |
  'castle' | 'fish' | 'frog' | 'red' | 'red2'

export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export type Card = {
  suit: Suit;
  rank: Rank;
};

export type GetPlayers = {
  player: Card[]
  bot: number
}

export type CurrentPlayer = 'bot' | 'player'
