import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineCloudUpload } from "react-icons/ai";
import toast from "react-hot-toast";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const style = {
  position: "absolute",
  borderRadius: "10px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Blog = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (file) => {
    console.log(file);
  };

  const handleTypeError = (error) => {
    toast.error(error);
  };

  return (
    <div className="w-full mt-12 p-6">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-semibold">
            Blog
          </Link>
        </div>
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              Home
            </Link>
            <Link
              className="text-xl font-semibold"
              underline="hover"
              color="inherit"
              to="/blog"
            >
              Blog
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full border-2 border-[#000000] rounded-[4px] shadow-md">
          <div className="flex justify-between items-center py-2 px-6 pb-2 bg-[#f0f0f0]">
            <h2 className="text-xl font-semibold">Blog</h2>
            <Button variant="outlined" onClick={handleOpen}>
              Add Blog
            </Button>
          </div>
          <div className="p-8">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="flex justify-center items-center" sx={style}>
              <FileUploader
                handleChange={handleChange}
                onTypeError={handleTypeError}
                types={["pdf"]}
              >
                <div className="w-48 h-48 border border-dashed border-[#000000] rounded-full flex flex-col justify-center items-center text-[#000000] cursor-pointer">
                  <AiOutlineCloudUpload size={80} />
                  <p>Drop Your FIle Here!</p>
                </div>
              </FileUploader>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};


export default Blog;
