import { useEffect, useState } from "react";
import BlogIndex from "../components/BlogIndex";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login, logout } from "../store/authSlice";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(setLoading(false));
  }, []);

  return !loading ? (
    <>
      <Navbar/>
      <BlogIndex/>
    </>
  ) : null
};

export default Home;
