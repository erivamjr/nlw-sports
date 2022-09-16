import './styles/main.css';

import logoImg from './assets/logo-nlw-sports.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreatAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }

}
function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}

      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
            <form className="nt-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input id="game" placeholder="Selecione o game que deseja jogar" />
              </div>

              <div>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <input id="name" placeholder="Como te chamam dentro do game?" />
              </div>

              <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                </div>
                <div>
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                </div>
                <div>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div>
                    <input id="hourStart" type="time" placeholder="De" />
                    <input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div>
                <input type="checkbox" />
                Costumo me conectar ao chat de vez
              </div>
              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root >
    </div >
  )
}

export default App
