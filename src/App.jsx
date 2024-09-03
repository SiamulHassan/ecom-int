import { RouterProvider } from "react-router-dom";
import router from "./route/AppRouter";
import "swiper/css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
