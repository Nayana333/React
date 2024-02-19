import  UserDetails from './userDetails';

function App() {

  const userData=[
    {id:1,name:'nayana',email:'nayana@gmail.com'},
    {id:2,name:'arathy',email:'arathy@gmail.com'}
  ];

  
  return (
    <div className="App">
      <h1>USER INFORMATION</h1>
        {userData.map((user)=>{
          return < UserDetails key={user.id} data={user}/>
        })}
    </div>
  );
}

export default App;




