import LoadingButton from "@/component/general/loadingButton";
import CustomSnackBar from "@/component/general/snackbar";
import { useAuthContext } from "@/context/auth";
import { ILoginForm } from "@/interfaces/auth/form";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const { login } = useAuthContext();
  const [snackbar, setSnackbar] = useState<{ error?: string; success?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: ILoginForm = { email: e.currentTarget["email"].value, password: e.currentTarget["password"].value };
    setSnackbar({});
    setLoading(true);
    login &&
      login(data)
        .then(() => {
          setSnackbar(() => ({ success: "Login sucessful" }));
          router.push("/user");
        })
        .catch((e) => {
          console.log({ m: e.message });
          setSnackbar(() => ({ error: e.message }));
        })
        .finally(() => {
          setLoading(false);
        });
  };
  return (
    <Stack justifyContent={"center"} alignItems="center" sx={{ minHeight: "100vh" }}>
      <Card elevation={0}>
        <Stack direction={"row"} gap="20px">
          <Link href={"/fallback"}>
            <Button> Fall </Button>
          </Link>
          <Link href={"/user"}>
            <Button> User </Button>
          </Link>
        </Stack>
        <Stack p={"1em"} gap={"1em"} justifyContent="center">
          <Typography>
            {" "}
            Login to Continue or{" "}
            <Link href={"/signup"}>
              <Button> Sign Up </Button>
            </Link>
          </Typography>
          <form onSubmit={handleLogin}>
            <Stack gap={"2em"}>
              <TextField label="Email" name="email" type={"email"} />
              <TextField label="Password" name="password" type={"password"} />
              <LoadingButton variant="contained" loading={loading} type="submit">
                Login
              </LoadingButton>
            </Stack>
          </form>
        </Stack>
      </Card>

      <CustomSnackBar
        display={Boolean(snackbar.error || snackbar.success)}
        type={snackbar.success ? "success" : "error"}
        message={snackbar.error || snackbar.success}
      />
    </Stack>
  );
}
