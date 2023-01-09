import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function Edit() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const blogs = JSON.parse(localStorage.getItem("blogs"));
  const editIndex = localStorage.getItem("editIndex");

  useEffect(() => {
    // console.log("useEffect",blogs);
    if (
      localStorage.getItem("blogs") &&
      localStorage.getItem("blogs").length > 0
    ) {
      blogs.map((blog, blogInIndex) => {
        console.log("blog", editIndex);
        if (blogInIndex == editIndex) {
          // console.log("matched",blog);
          setTitle(blog.title);
          setDesc(blog.desc);
        }
      });
    }
  }, []);

  const handleTitleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    console.log(e.target.value);
    setDesc(e.target.value);
  };
  const handleEdit = () => {
    // console.log({ title, desc, index: localStorage.getItem("editIndex") });
    let blogs =
      localStorage.getItem("blogs") && localStorage.getItem("blogs").length > 0
        ? JSON.parse(localStorage.getItem("blogs"))
        : [];
    const _blogs = blogs.map((blog, blogInIndex) => {
      if (blogInIndex == editIndex) {
        return { title, desc };
      } else {
        return blog;
      }
    });
    console.log(_blogs);
    localStorage.setItem("blogs", JSON.stringify(_blogs));
    navigate("/");
  };

  return (
    <>
      <Typography
        variant="h2"
        className="text-center"
        sx={{ color: "white", marginTop: "150px" }}
      >
        Edit BLOG
      </Typography>

      <Box
        display="flex"
        marginTop={3}
        flexdirection="column"
        justifyContent="center"
      >
        <Box alignSelf="center">
          <TextField
            sx={{
              minWidth: "600px",
              backgroundColor: "#ffd68a",
              "& .MuiFilledInput-input": { color: "black" },
            }}
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
              marginTop: "10px",
              "& .MuiFilledInput-input": { color: "black" },
            }}
            label="Description"
            multiline
            rows={4}
            value={desc}
            onChange={(e) => handleDescChange(e)}
            defaultValue="Default Value"
            variant="filled"
          />
          <br />
          <Button
            onClick={handleEdit}
            color="success"
            marginTop={2}
            alignSelf="center"
            sx={{
              marginTop: "10px",
              minWidth: "600px",
              backgroundColor: "#f57d00",
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

export default Edit;
