import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  console.log('render');
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    
  };

  
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setMonsters(users))
  },[]);

  useEffect(()=>{
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filteredMonsters);

  },[monsters,searchField]);

 
  return(

    <div className='App'>

    <h1 className='app-title'>Monsters Rolodex</h1>

    <SearchBox onSearchChange={onSearchChange}/>
    
    <CardList monsters={filteredMonsters}/>

    </div>

  );
}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters : [],
//       searchField : '',
//     };

//     console.log('constructor');
//   }


//   componentDidMount(){

//     console.log('componentdidmount');

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response)=> response.json())
    //   .then((users)=> this.setState(() => {return {monsters : users}},
    //     () => {
    //         console.log(this.state);
    //     }
        
     
    //    )
      
    //   )


//   }

  // onSearchChange = (event)=> {
  //   const searchField = event.target.value.toLocaleLowerCase();

  //   this.setState(()=> {
  //     return {searchField};
  //   });
  

  //   };



//   render(){

//     console.log('render');

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;


    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLocaleLowerCase().includes(searchField);
    // });
//   return(

//     <div className='App'>

//     <h1 className='app-title'>Monsters Rolodex</h1>

//     <SearchBox onSearchChange={onSearchChange}/>
    
//     <CardList monsters={filteredMonsters}/>

//     </div>
//   );
   
//   }
// }

export default App;
