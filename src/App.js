import logo from "./logo.svg";
import Navbar from "./Components/navbar/Navbar";
import Movies from "./Pages/movies/Movies";
import Favourites from "./Pages/favourites/Favourites";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import SpecificMovie from "./Components/specificMovie/SpecificMovie";
function App() {
  return (
    <div>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<SpecificMovie />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
