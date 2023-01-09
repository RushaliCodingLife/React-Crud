import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import "../App.css"

function Add() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = () => {
    console.log({ title, desc });

    const _blogs =
      localStorage.getItem("blogs") && localStorage.getItem("blogs").length > 0
        ? JSON.parse(localStorage.getItem("blogs"))
        : [];

    localStorage.setItem("blogs", JSON.stringify([..._blogs, { title, desc }]));

    navigate("/");
  };

  return (
    <>
      <Typography
        variant="h2"
        className="text-center"
        sx={{ color: "white", marginTop: "150px" }}
      >
        Publish your passions, your way
      </Typography>
      <Typography variant="h5" className="text-center" sx={{ color: "white" }}>
        Create a unique and beautiful blog easily...
      </Typography>

      <Box
        display="flex"
        marginTop={3}
        flexdirection="column"
        justifyContent="center"
      >
        <Box alignSelf="center">
          <TextField
            sx={{ minWidth: "600px", backgroundColor: "#ffd68a", "& .MuiFilledInput-input":{color:"black"} }}
            value={title}
            onChange={(e) => handleTitleChange(e)}
            label="Title"
            variant="filled"
          />
          <br />
          <TextField
            sx={{
              minWidth: "600px",
              backgroundColor: "#ffd68a",
              marginTop: "10px", "& .MuiFilledInput-input":{color:"black"} 
            }}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Default Value"
            value={desc}
            onChange={(e) => handleDescChange(e)}
            variant="filled"
          />
          <br />

          <Button
            color="success"
            marginTop={2}
            alignSelf="center"
            onClick={handleSubmit}
            sx={{
              marginTop: "10px",
              minWidth: "600px",
              backgroundColor:"#f57d00"
            }}
            variant="contained"
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Add;
