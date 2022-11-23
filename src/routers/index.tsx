import { Suspense } from "react";
import RouterAdmin from "./admin";
// import privateRouter from "./private";

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterAdmin />
    </Suspense>
  );
};
export default Routers;
