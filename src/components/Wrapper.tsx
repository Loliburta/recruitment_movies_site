import React, { useState } from "react";
import { App } from "./App/App";
import { overviewContext } from "../utils/context";

export const Wrapper = () => {
  const [overviewBox, setOverviewBox] = useState("");

  return (
    <overviewContext.Provider value={[overviewBox, setOverviewBox]}>
      <App />
    </overviewContext.Provider>
  );
};

export default Wrapper;
