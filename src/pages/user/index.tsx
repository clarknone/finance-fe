import RecordComponent from "@/component/record";
import CreateRecordModel from "@/component/record/createRecordModel";
import { useRecordQuery } from "@/hooks/record/fetch";
import UserLayout from "@/layout/user";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";


export default function UserHomePage() {
  const { data, loading } = useRecordQuery();
  const [recordModel, setAccountModel] = useState(false);

  const records = data || [];
  return (
    <UserLayout>
      <Box>
        {loading ? (
          <CircularProgress variant="indeterminate" />
        ) : records.length >= 1 ? (
          <Stack rowGap={"0.5em"}>
            {records.map((item) => (
              <RecordComponent key={item.id} {...item} />
            ))}
          </Stack>
        ) : (
          <Typography textAlign={"center"} fontSize={"0.8em"} my={"2em"}>
            No Data
          </Typography>
        )}
      </Box>
      <CreateRecordModel open={recordModel} close={() => setAccountModel(false)} />
    </UserLayout>
  );
}
