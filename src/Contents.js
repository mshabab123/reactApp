import { useState } from "react";

const Contents = () => {

  const [name, setName] = useState('MShaabb Alrizah')
  const [count, setCount] = useState(0)


  const handlNameChange = () => {
    const names = ['Mshabab', 'Abdullah', 'Mohammed'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }


  const handelClick2 = () => {
    console.log(`${count} you clikc on it!`);
  
  }

  
  const handelClick3 = () => {
    setCount( count+1);
    setCount( count+1);
    console.log(`${count} you clikc on it!`);
  
  }

  
  const name1 = "Mshasdtgbab"




  return (
    <main>
      <p>The anme is {name}</p>
      <button onClick={handlNameChange}>Click here!</button>
      <button onClick={handelClick3}>Click here3!</button>

      <button onClick={handelClick2}>Click here2!</button>
    </main>
  )
}

export default Contents