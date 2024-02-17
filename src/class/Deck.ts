import Player from "./player/Player";
import {Card, Rank, Suit} from "../utils/types";

class Deck {
  private cards:Card[] = []

  constructor() {
    this.cards = [];

    this.create();
  }

  create() {
    const deck: Card[] = [];

    const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks: Rank[] = [/*'2', '3', '4', '5', */'6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push({ suit, rank });
      }
    }

    this.cards = deck;
  }

  shuffle() {
    const shuffledDeck: Card[] = [...this.cards];

    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    this.cards = shuffledDeck;
  }

  dealCards(...players:Player[]) {
    for (let i = 1; i <= 7; i++) {
      players.map((player) => {
        if (!this.cards.length) {
          console.warn('Карти кінчились')
          return
        }
        const card = this.cards.pop()
        player.takeCard(card as Card)
      })
    }
  }

  dealCard(player:Player) {
    if (!this.cards.length) {
      console.warn('Карти кінчились')
      return
    }
    const card = this.cards.pop()
    player.takeCard(card as Card)
    return player.checkGroup()
  }

  get deck() {
    return this.cards
  }
}

export default Deck
