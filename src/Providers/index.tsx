import { AuthProvider } from "./Auth";
import { ReactNode } from "react";
interface ChildrenNode {
  children: ReactNode;
}

const Provider = ({ children }: ChildrenNode) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
