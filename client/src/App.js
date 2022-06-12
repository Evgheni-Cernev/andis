import { Route, Routes, useLocation } from "react-router-dom";
import ModalPreviewProduct from "./components/Products/ModalPreviewProduct";
import RenderRoutes from "./components/RenderRoutes/RenderRoutes";
import Layout from "./elements/Layout";
import routes from "./routes";

const App = () => {
  const location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const state = location.state;

  return (
    <Layout>
      <Routes location={state?.backgroundLocation || location}>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.path}
              element={<RenderRoutes {...route} />}
            />
          );
        })}
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/:locale/products/:productId"
            element={<ModalPreviewProduct />}
          />
        </Routes>
      )}
    </Layout>
  );
};

export default App;
