import React from "react";
import styles from '../Style.module.css';

class TypeSearch extends React.Component {
    readType(event) {
        event.preventDefault();
            let pokeType = document.querySelector("#pokemonType");

            fetch("/api/pokemon/type/" + pokeType.value).then((res) =>{
                return res.json();
            }).then((processed) => {
                let pokeReporting = document.querySelector("#reportingArea");
                if(processed.error){
                    pokeReporting.innerHTML = processed.error;
                }
                else{
                    pokeReporting.innerHTML = processed.name;
                }
            });
        }

    render() {
        return(
            <div className = {styles.type}>
                <form onSubmit = {this.readType}>
                <p>Enter Pok&eacute;mon Type:</p>
                <input id = "pokemonType" type = "text" />
                <button className = {styles.button}>.</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;
