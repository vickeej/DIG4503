import NameSearch from "../components/NameSearch";
import IdSearch from "../components/IdSearch";
import TypeSearch from "../components/TypeSearch";
import styles from '../components/Style.module.css';
import head from './img/head.png';
import foot from './img/foot.png';

const Home = () => {
    return(
      <body className = {styles.body}>
        <h1 className = {styles.h1}>The Kalos Pok&eacute;Dex:</h1>
        <div>
        <img src = {head} alt = "Pokedex Top" className = {styles.img}/>;
        <div className = {styles.container}>
          <NameSearch/>
          <IdSearch/>
          <TypeSearch/>
          <div id = "reportingArea" className = {styles.reportingArea}></div>
        </div>
        <img src = {foot} alt = "Pokedex bottom" className = {styles.img}/>;
        </div>
      </body>
    );
  }

export default Home;