import "./App.css";
import BackgroundAnimation from "./Layout/Components/BackgroundAnimation";
import Root from "./Layout/Root";
// import BackgroundAnimation from "./Components/BackgroundAnimation";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background animation */}
      <BackgroundAnimation />

      {/* Portfolio content on top */}
      <div className="relative z-10">
        <Root />
      </div>
    </div>
  );
}

export default App;
