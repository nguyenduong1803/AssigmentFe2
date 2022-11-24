import { Dispatch } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import type { SelectProps } from "@mui/material/Select";

interface ISelect extends SelectProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  value: string;
  label: string;
  options: string[];
}
export default function BasicSelect(props: ISelect) {
  const { value, setValue, label,options } = props;
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((item,index) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
