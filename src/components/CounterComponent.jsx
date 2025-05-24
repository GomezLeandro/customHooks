import { useCounter } from "../hooks/useCounter";

export const CounterApp = () => {

const {counter,increment,reset,decrement} = useCounter(0)

  return (
    <>
      <section className="vertical-align">
        <h1 className="center"> Counter: </h1>
        <h4 className="counter center"> {counter} </h4>
        <section className="center">
          <button className="btn btn-light" onClick={()=> increment() }>
            +1
          </button>
          <button  className="btn btn-dark" onClick={()=> reset()}>
            reset
          </button>
          <button  className="btn btn-light" onClick={()=> decrement(1,false)}>
            -1
          </button>
        </section>
      </section>
    </>
  );
};
