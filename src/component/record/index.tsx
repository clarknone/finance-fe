import { IRecord } from "@/interfaces/record";
import { Button, Card, CardActions, CardContent, Chip, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface IModels {
  withdraw: boolean;
  transfer: boolean;
}

export default function RecordComponent(record: IRecord) {
  const [model, setModel] = useState<IModels>({ withdraw: false, transfer: false });

  const toggle = (type: "withdraw" | "transfer") => {
    setModel((val) => ({ ...val, [type]: !val[type] }));
  };
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography> {record.description}</Typography>
        <Typography> {record.category.title}</Typography>
        <Stack>
          <Typography> {record.createdAt} </Typography>
          <Typography> {record.amount}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
