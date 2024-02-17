import Deck from "./Deck";
import Bot from "./player/Bot";
import Player from "./player/Player";
import {CurrentPlayer, GetPlayers, Rank} from "../utils/types";

import {eventEmitter} from '../hooks/useEvent'
import Message from "./Message";

class Game {
  private eventEmitter = eventEmitter;

  private deck:Deck
  private readonly bot:Bot
  private readonly player:Player

  private currentPlayer:CurrentPlayer = 'player'

  private timer:number = 0

  constructor() {
    this.deck = new Deck()

    this.bot = new Bot()
    this.player = new Player()

    this.init()
  }

  init() {
    this.deck.shuffle()

    this.deck.dealCards(this.bot, this.player)
  }

  guessingCard(rank:Rank) {
    const [opponent, player] = (() => {
      switch (this.currentPlayer) {
        case "player": return [this.bot, this.player]
        case 'bot': return [this.player, this.bot]
      }
    })()

    const guessing = opponent.checkGuessing(rank)

    if (guessing) {
      player.takeManyCard(guessing)
      const group = player.checkGroup()

      this.eventEmitter.emit('card_move', this.getPlayers())
      this.eventEmitter.emit('message', new Message(group ? 'group' : 'guessed').get(this.currentPlayer))

      return guessing
    }

    if (this.currentPlayer === 'player') this.bot.reduceMemoryCount()

    const isGroup = this.deck.dealCard(player)

    if (isGroup) {
      this.eventEmitter.emit('card_move', this.getPlayers())
      this.eventEmitter.emit('message', new Message('group').get(this.currentPlayer))
      return true
    }

    this.eventEmitter.emit('card_move', this.getPlayers())
    this.eventEmitter.emit('message', new Message('not guess').get(this.currentPlayer))

    this.changeCurrentPlayer()

    return null
  }

  botGuessingCard() {
    clearTimeout(this.timer)

    const rank = this.bot.intelligentCardGuess()

    this.eventEmitter.emit('message', new Message(rank).get('player'))
    console.log('rank', rank)

    this.timer = setTimeout(() => {
      const guessing = this.guessingCard(rank)
      if (guessing) this.botGuessingCard()
    }, 3 * 1000)
  }

  getDeck() {
    return this.deck.deck
  }

  getPlayers():GetPlayers {
    return {
      bot: this.bot.getHandCount(),
      player: this.player.getHand()
    }
  }

  getCurrentPlayer() {
    return this.currentPlayer
  }

  changeCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === 'player' ? 'bot' : 'player'
    this.eventEmitter.emit('player', this.currentPlayer)
  }
}

export default Game;
