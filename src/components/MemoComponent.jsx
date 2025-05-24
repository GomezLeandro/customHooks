import { useMemo, useState } from "react";

export const MemoApp = () => {
  const [show, setShow] = useState(true);
  const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
  
  
  const getCalculo = (numList) =>{
      console.log("calculando...");
      return numList.reduce((a, b) => a * b);}
 // Hay dos formas de usarlo
 // primera forma     
  const memorizedValue = useMemo(()=> getCalculo(),[numList])

//  segunda forma
//   const getCalculo = (numList) => useMemo(()=>{
//     console.log("calculando...");
//     return numList.reduce((a, b) => a * b);
//   },[numList])

  const addNumber = () => {
    setNumList([...numList, numList[numList.length-1] +1])
  }

  return (
    <>
       {show && <h2> Calculos</h2>}
       {/* segunda forma */}
      {/* <h4> El calculo es: {getCalculo(numList)} </h4> */}
      {/* primera forma */}
      <h4> El calculo es: {memorizedValue} </h4>
      <button type="button" className="btn btn-info" onClick={() => setShow(!show)}>
        {show ? "Ocultar Calculo" : "Mostrar Calculo"}
      </button>
      <button  className="btn btn-danger" onClick ={()=> addNumber()}> Agregar más números </button>
    </>
  );
};
