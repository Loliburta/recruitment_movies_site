import { createContext } from "react";

type overviewContextProps = [
    overviewBox: any,
    setOverviewBox?: React.Dispatch<React.SetStateAction<any>>
  ];
export const overviewContext = createContext<overviewContextProps>([""]);

