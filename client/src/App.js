
import { Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";

import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

import UsersList from "./Pages/UsersList";

function App() {


  return (
    <div className="App">
    <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/*" element={<Error/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/add/" element={<AddPage/>}/>
        <Route path="/Users-List" element={<UsersList/>}/>
      </Routes>
    </div>
  );
}

export default App;
