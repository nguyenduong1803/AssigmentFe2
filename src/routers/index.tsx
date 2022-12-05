import { Suspense } from "react";
import RouterAdmin from "./routers";
// import privateRouter from "./private";

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterAdmin />
    </Suspense>
  );
};
export default Routers;
