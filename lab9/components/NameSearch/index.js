import React from "react";

class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault();
            let pokeName = document.querySelector("#pokemonName");

            fetch("/api/pokemon/name/" + pokeName.value).then((res) =>{
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
            <div>
                <form onSubmit = {this.readName}>
                <p>Enter Pokemon Name:</p>
                <input id = "pokemonName" type = "text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;
