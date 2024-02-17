import scss from './App.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(scss)

import {Cards} from "./components/Cards";

import {useLayoutEffect, useState} from "react";
import Game from "./class/Game";
import {Card, CurrentPlayer, Rank} from "./utils/types";
import {useEvent} from "./hooks/useEvent";

const App = () => {
  const [game, setGame] = useState<Game>()

  const [bot, setBot] = useState<number>()
  const [player, setPlayer] = useState<Card[]>([])

  const [message, setMessage] = useState<string>('')

  const [timeout, setTimeoutState] = useState<number>()
  const [timeoutBot, setTimeoutBot] = useState<number>()

  useEvent('message', (data) => {
    clearTimeout(timeout)
    setMessage(data)
    const timer = setTimeout(() => setMessage(''), 4 * 1000)
    setTimeoutState(timer)
  })
  useEvent('card_move', (data) => {
    setBot(data.bot)
    setPlayer(data.player)
  })
  useEvent('player', (data:CurrentPlayer) => {
    if (data === 'player') return
    clearTimeout(timeoutBot)

    const timer = setTimeout(() => {
      game?.botGuessingCard()
    }, 2 * 1000)
    setTimeoutBot(timer)
  })

  useLayoutEffect(() => {
    const game = new Game()
    console.log('game', game)
    setGame(game)

    const players = game.getPlayers();

    setBot(players.bot)
    setPlayer(players.player)
  }, [])

  const onClick = (rank:Rank) => {
    if (game?.getCurrentPlayer() === 'bot') return
    game?.guessingCard(rank)
  }

  return (
    <div className={cn('App')}>
      <Cards count={bot}/>

      {message ? <div className={cn('App__message')}>
        {message}
      </div> : null}

      <Cards cards={player} onClick={onClick}/>
    </div>
  )
}

export default App
