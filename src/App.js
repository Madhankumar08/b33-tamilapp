import "./App.css";
import { AddColor } from "./AddColor";

export default function App() {
  const users = [
    {
    name : "madhan",
    pic:"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2020/11/11/133486-virat-kohli-pti-j.jpg?itok=9xdid56G&c=4d942a74b30a9cd43bb1639dd6002b86"
  },
    {
    name : "faizal",
    pic: "https://i.pinimg.com/originals/ba/bb/f4/babbf4905c628305645d625992313222.jpg" 
    },
    {
    name : "sonu",
    pic:"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
    }
  ]


  const people = [ "madhan","faizal","sonu","maddy","billu"]
  
  
  return (
    <div className="App">
      {/* {users.map((user)=>(
       <Msg
       name={user.name} pic={user.pic}
      />
      ))}
      

      {people.map( personName => <Welcome name={personName} /> )} */}
      {/* <Counter />
      <Counter />
      <Counter /> */}
      

       <AddColor />
    </div>
  );

}


