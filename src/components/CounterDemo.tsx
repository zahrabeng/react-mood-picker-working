function CounterDemo(): JSX.Element {
  let counter = 11;

  const incrementCounter = () => {
    console.log("before incrementing, counter is", counter);
    counter++;
    console.log("after incrementing, counter is", counter);
  };

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counter}</p>
      <button onClick={incrementCounter}>+1 to value</button>
    </>
  );
}

export default CounterDemo;
