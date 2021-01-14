import './App.css';
import Profil from './components/Profil';

function App() {

  return (
    <div>
      <h1>Listes des profils</h1>
      <Profil first="Anis" family="Poupouille">Anis, le meilleur Poupouille du Monde Coeur-Coeur</Profil>
      <Profil first="Florence" family="Pimpinou">Florence, la Pimpinou préférée de Poupouille</Profil>
      <Profil first="Chloé" family="La Petite Rue">Celle qui a le meilleur beau-frère</Profil>
      <Profil first="Chocolat" family="le King"></Profil>
    </div>
  );
}

export default App;
