import React, { useEffect, useState } from "react";
import { Container, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useStyles } from "./styles";

// components
import Navbar from "../../components/Navbar/Navbar";

// api
import { fetchStory } from "../../api";

export default function Details() {
  const { search } = useLocation();
  const uid = search.split("=")[1];

  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchStory(uid);
        setData(res.data);
        document.title = `${res.data.name}`;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [uid]);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={12}>
            <Paper className={classes.root} elevation={6}>
              <Paper variant="outlined" className={classes.top}>
                <Typography variant="overline" className={classes.name}>
                  By: {data.name}
                </Typography>
                <br />
                <Typography variant="overline" className={classes.date}>
                  Date Created: {data.date}
                </Typography>
              </Paper>
              <Divider />
              <Paper elevation={0} className={classes.bottom}>
                <Typography variant="body1" className={classes.content}>
                  {data.content}
                </Typography>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
