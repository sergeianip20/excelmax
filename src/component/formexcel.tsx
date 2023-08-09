import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BasicSelect from "./SelectExcel";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../App";
import { Button } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
export default function BasicTextFields(props: any) {
  const [age, setAge] = React.useState("");
  const handleChange = (e: string) => {
    setAge(e);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    props.newArrayValue({ ...data, tipsWeldedConnection: age });
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register("WeldNo")}
        id="standard-basic"
        label="Сварочное соединение"
        variant="standard"
      />
      <TextField
        {...register("wallThickness")}
        id="standard-basic"
        label="Диаметр толщина стенки"
        variant="standard"
      />
      <TextField
        {...register("seamType")}
        id="standard-basic"
        label="Тип шва"
        variant="standard"
      />
      <BasicSelect age={age} handleChange={handleChange} />
      <TextField
        {...register("WeldLength")}
        id="standard-basic"
        label="Длина сварного соединения"
        variant="standard"
      />
      <TextField
        {...register("connectedElements")}
        id="standard-basic"
        label="Наименование соединяемых"
        variant="standard"
      />
      <TextField
        {...register("GradeSteel")}
        id="standard-basic"
        label="Марка стали "
        variant="standard"
      />
      <Button type="submit"> добавить строку</Button>
    </Box>
  );
}
