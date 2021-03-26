import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


function App() {
  return (
    <div>
      hello wolrd!
      <Counter/>
      <UserAvecEtat/>
      <IndienaAvecEtat />
      <Personne nom="titi" age="26" pays="" />{/*mettra le delfaultprops a vide*/}
      <Personne nom="téti" age="age" /> {/*attend une erreur de number*/}
      <JsxF3 />
      <Para /><Ganje />
      <JsxF2 />
      <Fruit1 /><Fruit /><Fruit /><GanjAE /><Fruit /><Fruit /><Fruit />
      <Fruit1 type="!pom" poids="10meug">je suis ienb</Fruit1>
      <Fruit1 type="!pomita" poids="10meuitosg">je suis ienbo</Fruit1>
      { /* propsprops: {type:"!pom", poids:"10meug", children : "je suis ienb"}*/}
    </div>

  );
}

class Fruit extends React.Component { // c est comme si on crée un compsoant type html
  render() {
    return ( // return toujours un et un seul composanten mode déclaratif de type<>

      <h1> !je suis un pom </h1>
      // <p> ne fonctionnera pas</p> car 2 elements racine
    );
  }
}

class Para extends React.Component {//composant avec etat?
  render() {
    return (
      <div>
        <h1> jesuis le titre</h1>
        <p> lorem ipsum le Paragraphe qui ecrit pas</p>
      </div>
    );
  }
}
function Ganje() {// composant simple fonctionnel
  return (
    <h2> !on me mange </h2>

  );
}

let GanjAE = () => {// fonction fléchée ici anonyme
  return (
    <h2> !on me mange ts les jours </h2>

  );
}

function JsxF() {
  const fruits = ["pom", "java", "cafe"];

  return (
    <h2>  jesuis {
      fruits.map(
        function (fruit) {
          return <span>{fruit}</span>
        })
    }
    </h2>

  )
}

function JsxF2() {
  const fruits2 = ["pom", "java", "cafe", "croissants"];

  return (
    <div>
      <ul> <h1> je suis le :</h1> {
        fruits2.map(
          function (fruit2) {
            return <li>{fruit2}</li>
          })
      }
      </ul>
    </div>
  )
}
function JsxF3() {
  const fruits3 = ["pom", "java", "cafe", "croissants", "buñuelo"];

  return (
    <div>
      <ul> <h1> je suis le :</h1> {
        fruits3.map((fruit3) => <li>{fruit3}</li>)
      }
      </ul>
    </div>
  )
}

let Fruit1 = function (props) {//props nom par convention props: {type:"", poids:"", children : ""}
  return (
    <div>
      je suis {props.type} et de poids {props.poids} et de children {props.children}
    </div>
  );
}

let Fruit4 = function (type, poids, children) {//props nom par convention props: {type:"", poids:"", children : ""}
  return (
    <div>
      je suis {type} et de poids {poids} et de children {children}
    </div>
  );
}

class Personne extends React.Component {// <Personne nom="titi" age="26"/>
  constructor(props) {//returne un arg props
    super(props);// extends de la super class react.component
  }
  render() {
    return (
      <div>
        Nom:{this.props.nom} Age: {this.props.age} pays : {this.props.pays}
      </div>
    );
  }

}

Personne.defaultProps = {
  pays: "burundi"
}
Personne.propTypes = {
  nom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}



class IndienaAvecEtat extends React.Component {//on utilise l etat interne ce compossant
  constructor(props) {
    super(props);
    this.state = {
      indienNord: [
        {
          type: "apaches",
          methodes: "scalper"
        },
        {
          type: "redskin",
          methodes: "scalper aussi"
        }

      ],
      indienSud: [
        {
          type: "calima",
          methodes: "manger"
        },
        {
          type: "inca",
          methodes: "manger cru"
        }
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <p> attention je suis un  {this.state.indienNord[0].type} et je vais te {this.state.indienNord[0].methodes}</p>
        <p> attention je suis un  {this.state.indienSud[0].type} et je vais te {this.state.indienSud[0].methodes} mais en vrais je suis {this.props.caractere}</p>
        <button onClick={this.changeState}>click to change</button>
      </React.Fragment>
    );
  }
  changeState = () => {
    this.setState({
      indienNord: [
        {
          type: "calima",
          methodes: "scalper"
        }
        ]
    });
  }
}
IndienaAvecEtat.defaultProps = {
  caractere: "aimable"
}

class UserAvecEtat extends React.Component {//on utilise l etat interne ce compossant
  constructor(props) {
    super(props);
    this.state = {
      user1: [
        {
          nom: "apaches",
         age: "15"
        },
        {
          nom: "apachesses",
         age: "153"
        }

      ],
      user2: [
        {
          nom: "apaiiches",
         age: "15"
        },
        {
          nom: "esses",
         age: "1553"
        }
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <p> attention je suis un  {this.state.user1[0].nom} et j ai {this.state.user1[0].age}</p>
        <button onClick={this.changeState}>click to change</button>
      </React.Fragment>
    );
    }changeState = () => {//methode fléchée obligatoire
      this.setState({
        user1: [
          {
            nom: "calima",
            age: "scalper"
          }
          ]
      });
    }
  }

  class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state={
        count: 0
      }
      this.handleSomething = this.handleSomething.bind(this);// liaison permanete entre l objet et la fonction remplace la fontion fleche du bas
    }
    render(){
      return(
        <React.Fragment>
          <div> {this.state.count}</div>
          <button onClick={this.handleSomething}>+3</button>
        </React.Fragment>
      )
    }
    handleSomething(){ //handleSomething=()=>{ fontionnait sans le this.handleSomething = this.handleSomething.bind(this); 
      this.setState(function(state,props) { return {count :state.count+1}; });
      this.setState(function(state,props) { return {count :state.count+1}; });
     this.setState(function(state,props) { return {count :state.count+1}; });


      /* this.setState((state,props)=> ({count:state.count+props.increment}));
      this.setState((state)=> ({count:state.count+1})); */



      /* this.setState({count:this.state.count+1});
      this.setState({count:this.state.count+1});
      this.setState({count:this.state.count+1});
 */
   }
  }


export default App;
