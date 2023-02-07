import { ReactNode } from "react";
import "./Layout.css";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <main className="layout">{children}</main>;
};
