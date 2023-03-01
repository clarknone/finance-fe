import { Box, Container, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth={false}>
      <Typography> User Layout </Typography>
      <main>{children}</main>
    </Container>
  );
}
 