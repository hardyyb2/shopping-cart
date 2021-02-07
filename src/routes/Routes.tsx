import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { Spinner } from "../common";

const Home = lazy(() => import("../pages/index"));

const Routes: React.FC<{}> = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route path="/" component={Home} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
