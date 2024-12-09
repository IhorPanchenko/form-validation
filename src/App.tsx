import FormInput from "./components/FormInput";
import "../src/styles/app.scss";

function App() {
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Username" />
      </form>
    </div>
  );
}

export default App;
