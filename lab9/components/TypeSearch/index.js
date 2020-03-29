import React from "react";

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
            <div>
                <form onSubmit = {this.readType}>
                <p>Enter Pokemon Name:</p>
                <input id = "pokemonType" type = "text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;
