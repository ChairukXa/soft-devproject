import './App.css';
import AppNavbar from './component/AppNavbar';
import {BrowserRouter as Route, Switch} from 'react-router-dom'
import Home from './Page/Home';
import Archetype from './Page/Archetype';
import RuleBook from './Page/RuleBook';
import Search from './Page/Search';
import Error404 from './Page/Error404';
import Account from './Page/Account';
import DarkMagicianArchetype from './Page/DarkMagicianArchetype';
import Dark_Magician from './Page/Dark_Magician';
import Eternal_Soul from './Page/Eternal_Soul';
import Dark_Magical_Circle from './Page/Dark_Magical_Circle';

function App() {
  return (
    <div className='App'>
    <AppNavbar />
    <Switch>
        <Route path='/soft-devproject' page={Home} exact><Home /></Route>
        <Route path='/archetype' page={Archetype}><Archetype /></Route>
        <Route path='/ruleBook' page={RuleBook}><RuleBook /></Route>
        <Route path='/search' page={Search}><Search /></Route>
        <Route path='/account' page={Account}><Account /></Route>
        <Route path='/dark-magician-archetype' page={DarkMagicianArchetype}><DarkMagicianArchetype /></Route>
        <Route path="/darkmagician" page={Dark_Magician}><Dark_Magician /></Route>
        <Route path="/eternal_soul" page={Eternal_Soul}><Eternal_Soul /></Route>
        <Route path="/dark_magical_circle" page={Dark_Magical_Circle}><Dark_Magical_Circle /></Route>
        <Route path='/*' page={Error404}><Error404 /></Route> 
    </Switch>
    </div>
  );

}

export default App;
