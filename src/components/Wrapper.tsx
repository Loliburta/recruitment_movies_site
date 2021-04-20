import React, { useState } from "react";
import { App } from "./App/App";
import { OverviewContext } from "../utils/context";

export const Wrapper = () => {
  let [open, isOpen] = useState(false);

  return (
    <OverviewContext.Provider value={[open, isOpen]}>
      <App />
    </OverviewContext.Provider>
  );
};

export default Wrapper;
