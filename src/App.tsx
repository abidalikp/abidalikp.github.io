import "./App.css";
import Resume from "./routes/Resume";

function App(): React.ReactNode {
  return (
    <div className="w-full bg-secondary">
      <div className="mx-auto max-w-3xl">
        <Resume />
      </div>
    </div>
  );
}

export default App;
