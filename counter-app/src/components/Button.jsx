function CounterButton({ addFunc, button}) {
  return <button onClick={addFunc}>{button}</button>
}

export default CounterButton
