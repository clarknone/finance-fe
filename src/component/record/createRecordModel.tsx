import { Box, Typography, TextField, Stack, Dialog, MenuItem } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { FormEvent } from "react";
import { useRecordCreate } from "@/hooks/record/fetch";
import { IRecordForm } from "@/interfaces/record/form";
import { useCategoryQuery } from "@/hooks/category/fetch";
import LoadingButton from "../general/loadingButton";

export interface ICreateAccountModelProps {
  open: boolean;
  close: () => void;
}

export default function CreateRecordModel(props: ICreateAccountModelProps) {
  const { mutate, isLoading } = useRecordCreate(props.close);
  const { data: categories } = useCategoryQuery();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: IRecordForm = {
      amount: e.currentTarget["amount"].value,
      category: e.currentTarget["category"].value,
      description: e.currentTarget["description"].value,
    };
    mutate(data);
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "400px",
          border: "none",
          backgroundColor: "white",
        },
      }}
    >
      <Box>
        <Stack direction={"row"} p={"1em"} gap={"1em"} alignItems="center" justifyContent="space-between">
          <Typography my={"1em"} textAlign="center">
            Create Account
          </Typography>

          <IconButton
            aria-label="close"
            onClick={props.close}
            sx={{
              fontSize: { xs: "12px", sm: "18px", md: "24px" },
              color: "#000000",
            }}
          >
            <FaTimes />
          </IconButton>
        </Stack>

        <Stack gap={"1em"} p={"1em"} alignItems="flex-start" justifyContent="center">
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Stack gap="1em" alignItems="flex-start" justifyContent="center">
              <TextField fullWidth label="Category" name="category" select>
                {categories?.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.description}
                  </MenuItem>
                ))}
              </TextField>
              <TextField fullWidth label="Description" name="description" required></TextField>
              <TextField fullWidth label="Amount" name="amount" type="number" required />
            </Stack>
            <Stack mt={"1em"} direction="row" justifyContent="right">
              <LoadingButton variant="contained" disableElevation loading={isLoading} type="submit">
                Create
              </LoadingButton>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Dialog>
  );
}
