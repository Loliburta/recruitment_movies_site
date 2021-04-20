import { createContext } from "react";
type ContextProps = [isOpen?: boolean, setIsOpen?: (open: boolean) => void];

export const OverviewContext = createContext<ContextProps>([]);
