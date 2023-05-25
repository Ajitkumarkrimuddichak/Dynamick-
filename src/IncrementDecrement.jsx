import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
//import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const IncrementDecrement = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decrem = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry,Zero Limit Reached");
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_viv">
          <h1>{num}</h1>
          <div>
            <Tooltip title="Add">
              <Button onClick={incNum}>
                <AddIcon />
              </Button>
            </Tooltip>

            <Tooltip title="Delete">
              <button onClick={decrem}>
                <DeleteForeverIcon />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncrementDecrement;
