import React from "react";
import "./Header.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Header = ({ todos, onToggleAll, sortValue, onSortChange }) => {
  const completedTodosCount = todos.filter((todo) => todo.completed).length; // count for completing all to-do
  let areAllTodosCompleted =
    completedTodosCount === todos?.length ? true : false;

  const onChangeHandler = (event) => {
    onSortChange(event.target.value); // sorting the default and completed to-do
  };
  return (
    <div className="main-header" data-testid="header">
      <span className="header" id="todos-header">
        Completed Todos {completedTodosCount} / {todos.length}
      </span>

      <div className="headerDiv">
        <div className="complete-checkbox-style">
          {" "}
          <FormControlLabel
            labelPlacement="start"
            control={
              <Checkbox
                checked={areAllTodosCompleted}
                onChange={(event) => onToggleAll(areAllTodosCompleted, event)}
              />
            }
            label="Complete All"
          />
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Sort by
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={sortValue}
              onChange={(event) => onChangeHandler(event)}
              label="Age"
            >
              <MenuItem value="">
                <em>Default</em>
              </MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
