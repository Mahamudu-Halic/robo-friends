import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filterMonsters, setFilterMonsters] = useState(monsters)
 
  // On Search Change
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  // Use Effect
  // Fetch API from URL
  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])

//Filter Monstes
  useEffect(() => {
    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    setFilterMonsters(newMonsters)
  }, [monsters, searchField])


  return (
  <div className="App">
    <h1 className='app-title'>Monter Robots</h1>
    <SearchBox 
      onChangeHandler={onSearchChange}
      placeholder='search monsters'
      className='monster-search-box'
    />
    <CardList 
      monsters={filterMonsters}
    />
  </div>
  )
}

// class App extends Component{

//   // Constructor
//   constructor(){
//     super();

//     this.state = {
//       monsters : [],
//       searchField: ''
//     }
//   }

//   //Life Cycle Methods
//   componentDidMount(){
//     const apiUrl = 'https://jsonplaceholder.typicode.com/users';
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     }))
//   }

//   // On Search Change
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   //Render 
//   render(){

//     //Destructuring
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monter Robots</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monster-search-box'/>
//         <CardList monsters={filterMonsters}/> 
//       </div>
//     );
//   }
// }

export default App;
