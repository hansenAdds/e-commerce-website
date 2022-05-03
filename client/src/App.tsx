import { useState } from "react";

//var is not going to change  , let the var is going to change


//jsx is the syntax extension to javascipt, it 


function App() {


  const[products,setProducts]=useState([
    {name: 'product1', price:100.00},
    {name: 'product2', price:200.00},
  ])
 
  //pervState is the last state from state
  function addProduct(){
    setProducts(prevState => [...prevState,{name: 'product'+(prevState.length+1), price : (prevState.length*100+100)}])
  }

  // const[productsID,setId] =useState([0])


  
 
 

  return (
    //css class name, use style as the object ,thats why we need clely brack
    <div className='app'> 
      and change
      
      <h1 style={{color:'red'}}>this is test</h1>
      
      <ul>
        
        {products.map((item,index) => (
          <li key={index}>{item.name}--{item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
      {/* control + L = comment */}
      {/* <button onClick={()=>setId(productsID + 1)}></button> */}
      <p>element</p>
    </div>
  );
}



export default App;
