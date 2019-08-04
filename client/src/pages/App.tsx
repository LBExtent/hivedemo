import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import axios from "axios";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

export default function App() {
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/welcome");
        console.log(res);
        setItem(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Docker exmaple using React {item}
        </Typography>
        <MadeWithLove />
        {console.log(item)}
      </Box>
    </Container>
  );
}
