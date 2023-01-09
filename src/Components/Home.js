import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = localStorage.getItem("blogs");
    setBlogs(JSON.parse(blogs));
  }, []);

  const handleDelete = (blogOutIndex) => {
    const _blogs = blogs.filter((blog, blogInIndex) => {
      if (blogInIndex !== blogOutIndex) {
        return blog;
      }
    });
    console.log(_blogs);
    setBlogs(_blogs);
    localStorage.setItem("blogs", JSON.stringify(_blogs));
  };

  const handleEdit = (blogIndex) => {
    localStorage.setItem("editIndex", blogIndex);
    navigate("/edit");
  };

  return (
    <>
      <Box
        display="flex"
        marginTop={3}
        flexdirection="column"
        justifyContent="center"
      >
        <Box alignSelf="center">

        <Box className="text-center">
          <Button
            sx={{
              marginTop: "10px",
              minWidth: "100px",
              backgroundColor: "#f57d00",
              fontSize:"14px",
              fontWeight:400,
              lineHeight:"12px",
              height:"40px",
              borderRadius:"10px"
            }}
            onClick={() => {
              navigate("/add");
            }}
            variant="contained"
            marginTop={2}
            
          >
            ADD BLOG
          </Button>
          </Box>

          {/* Card Posts */}

          <Box className="container-fluid" marginTop={5}>
            <div className="row" display="flex">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image="https://www.shoutmeloud.com/wp-content/uploads/2020/12/Reasons-Why-People-Blog.jpg"
                      width="500px"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-open-graph.jpg"
                      alt="green iguana"
                      width="500px"
                    />
                  </CardActionArea>
                </Card>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image="http://img.picturequotes.com/2/836/835152/i-am-a-blogger-that-is-an-amazing-thing-for-me-because-it-captures-a-moment-in-time-every-day-quote-1.jpg"
                      alt="green iguana"
                      width="400px"
                    />
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </Box>

     

<Box sx={{backgroundColor:"#efc994"}}>

<TableContainer component={Paper} sx={{marginTop:"20px" }}>
      <Table sx={{ minWidth: 600}} aria-label="customized table">
        <TableHead>
          <TableRow>
          
            <StyledTableCell sx={{display:"flex", marginRigth:"50px"}} >
              <Typography variant="h6" >
              Title
              </Typography>
              <Typography variant="h6" sx={{ marginLeft:"460px"}}>
              Description
              </Typography>
            </StyledTableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {blogs && blogs.length > 0
            ? blogs.map((blog, blogIndex) => {
                return (
                  <div
                    style={{
                      borderBottom: "1px solid #eee",
                      color: "black",
                      marginTop: "50px",
                    }} key = {blogIndex}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "500px",
                        fontSize: "20px",
                        marginLeft:"15px"
                      }}
                    >
                      {blog?.title}{" "}
                    </span>
                    
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "600px",
                        fontSize: "20px",
                      }}
                    >
                      {blog?.desc}
                    </span>
                    <EditIcon
                    
                      style={{ color: "navyblue", minWidth: "200px", cursor:"pointer" }}
                      onClick={() => handleEdit(blogIndex)}
                    ></EditIcon>
                    <DeleteIcon
                      style={{ color: "crimson", minWidth: "100px" , cursor:"pointer"}}
                      onClick={() => handleDelete(blogIndex)}
                    ></DeleteIcon>
                  </div>
                );
              })
            : "No Data found"}
      </TableBody>
      </Table>
    </TableContainer>
        </Box>
        </Box>
</Box>
 
    
    </>
  );
}

export default Home;
