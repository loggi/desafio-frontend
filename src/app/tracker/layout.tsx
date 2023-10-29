import ptBR from "@/_mock/lang/pt-BR";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
export const metadata = {
  title: ptBR.trackerPage.metadata.title,
};

export default function Layout({ children }: LayoutProps) {
  return children;
}
