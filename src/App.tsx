import { Suspense } from 'react';
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages/home-page/home-page";
// import PrivateRoutes from "./routes/private-routes";
import PublicRoutes from "./routes/public-routes";

const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <HelmetProvider>
        <h1>App</h1>
        <HomePage/>
        <PublicRoutes/>
        {/*<PrivateRoutes/>*/}
      </HelmetProvider>
    </Suspense>
  )
}


export default App;