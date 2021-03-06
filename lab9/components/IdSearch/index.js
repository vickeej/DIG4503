import React from "react";

class IdSearch extends React.Component{
    readId(event){
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
            <div>
                <form onSubmit = {this.readId}>
                <p>Enter Pokemon ID:</p>
                <input id = "pokemonId" type = "text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;
