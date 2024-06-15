import Home from "./pages/Home";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={routes}>
        <Home />
      </RouterProvider>
    </>
  );
};

export default App;
