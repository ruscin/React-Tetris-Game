import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos"

const Cell = ({ type }) => (
    <StyledCell type={"L"} color={TETROMINOS["S"].color}>cell 
     {console.log(TETROMINOS["S"].color)}
    </StyledCell>
   
)

export default Cell;