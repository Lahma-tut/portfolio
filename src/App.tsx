import './App.css'
import { Header } from './components/Header'
import CardLists from './components/CardLists'

export default function App() {

  return (
    <>
    <Header />
      <main>
        <h1>Фронтенд <br /> разработчик</h1>     
        <CardLists />
      </main>
      <footer>@maxpryadkin</footer>
    </>
  )
}
