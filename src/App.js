import './App.css';
import Players from './players';
import PlayersList from "./playerlist";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Player's Cards</h1>
      </header>
      <section className="playersection">
        <PlayersList />
      </section>
      <footer className="footer">
        <p>© 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
