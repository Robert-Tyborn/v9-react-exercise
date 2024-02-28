import "./App.css";
import AdaText from "./About.jsx";
import AdaImage from "./Image.jsx";

function App() {
  const name = "Ada Lovelace";

  return (
    <main>
      <AdaImage />
      <h1>{name}</h1>
      <AdaText />
    </main>
  );
}

export default App;
