import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Loder from "./components/Loder";

import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading,ReloadData } from "./redux/rootSlice";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";




//import { useSelector } from "react-redux";

function App() {


  const { loading, portfolioData,reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getportfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getportfolioData();
    }
  }, [portfolioData]);


  useEffect(()=>{
   if(reloadData){
    getportfolioData();
   }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading ? <Loder /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
