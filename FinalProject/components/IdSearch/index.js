import React from "react";
import styles from '../Style.module.css';

class IdSearch extends React.Component{
    readID(event){
        event.preventDefault();
        let pokeId = document.querySelector("#pokemonId");

        fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{
            return res.json();
        }).then((processed) =>{
            let pokeReporting = document.querySelector("#reportingArea");
            if(processed.error){
                pokeReporting.innerHTML = processed.error;
            }
            else{
                pokeReporting.innerHTML = processed.name;
            }
        });
    }
    
    render(){
        return(
            <div className = {styles.id}>
                <form onSubmit = {this.readID}>
                <p>Enter Pok&eacute;mon ID:</p>
                <input id = "pokemonId" type = "text" />
                <button className = {styles.button}>.</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;
