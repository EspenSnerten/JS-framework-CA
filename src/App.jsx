import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default App;
