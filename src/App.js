import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";
import Character from "./components/Character";
import { QueryClientProvider, QueryClient } from "react-query";
function App() {
  const queryclient = new QueryClient();
  return (
    <div className="App">
      <div className="container">
        <h1>Rick And Morty</h1>
        <QueryClientProvider client={queryclient}>
          <Character />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
