import {Record} from "../utils/utilsTypes";
import {random} from "../utils/helper";
import {CurrentPlayer} from "../utils/types";

type MessageEvent = 'guessed' | 'not guess' | 'group' | string

type Messages = Record<MessageEvent, string[]>
type NormalMessages = Record<MessageEvent, string>

const list = ['guessed', 'not guess', 'group']

class Message {
  event:MessageEvent

  normal:NormalMessages = {
    guessed: 'Вгадав',
    "not guess": 'Беріть карту',
    group: ''
  }

  messages:Messages = {
    guessed: [
      'Ти точно магістр гри!',
      'У тебе як у шамана, все відразу вгадується!',
      'Ще один день, ще одне безпомилкове вгадування!',
      'Твої вгадування - як сонячний промінь серед хмар.',
      'З тобою кожна карта виглядає, як відкрита книга!',
    ],
    'not guess': [
      'Не переймайся, навчання - це теж перемога!',
      'Ще одна спроба - ще один шанс на велике вгадування!',
      'Справжні герої вгадують не з першого разу!',
      'Краще не вгадувати зараз, але потім врази усіх!',
      'Вгадувати - це тільки частина шляху до великого успіху!',
    ],
    group: [
      'Я то думав ви вмієте грати в карти',
      'Сьогодні мені везе'
    ]
  }

  constructor(event:MessageEvent) {
    this.event = event
  }

  get(currentPlayer: CurrentPlayer) {
    const isMessage = Math.random() > .7;

    const name = currentPlayer === 'bot' ? 'Ви: ' : 'Бот: '

    const message = list.some((event) => this.event === event)
      ? isMessage
        ? this.messages[this.event][random(0, this.messages[this.event].length-1)]
        : this.normal[this.event]
      : this.event

    return name + message
  }
}

export default Message
