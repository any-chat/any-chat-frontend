import { Route, Routes } from "@solidjs/router";

import Index from "../views";
import Session from "../views/session";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/session/:id" element={<Session />} />
    </Routes>
  );
};
