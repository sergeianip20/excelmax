import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect(props: any) {
  const handleChanges = (event: SelectChangeEvent) => {
    props.handleChange(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Тип сварчного соединения
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.age}
          label="Тип сварчного соединения"
          onChange={handleChanges}
        >
          <MenuItem value={"Тавровое"}>Тавровое</MenuItem>
          <MenuItem value={"Нахлесточное"}>Нахлесточное </MenuItem>
          <MenuItem value={"Стыковое"}>Стыковое</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
