import DashboardAppBar from "@/component/layout/appbar";
import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth={false}>
      <DashboardAppBar toggle={() => {}} type="user" title="Track Your Records" />
      <main>{children}</main>
    </Container>
  );
}
