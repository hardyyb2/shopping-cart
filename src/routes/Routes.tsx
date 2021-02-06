import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../pages/index"));

const Routes: React.FC<{}> = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
