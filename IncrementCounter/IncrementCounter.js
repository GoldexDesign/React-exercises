import "./styles.css";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <p id="counter">{counter}</p>

      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
