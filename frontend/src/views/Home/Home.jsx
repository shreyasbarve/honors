import { useEffect, useState } from "react";
import { Container, Grid, Grow, Paper, Typography } from "@material-ui/core";

// api
import { fetchStories } from "../../api/index";

// components
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import FAB from "../../components/FAB/FAB";
import Dialog from "../../components/Dialog/Dialog";

export default function Home() {
  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState();
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleSearch = (value) => {
    if (value !== "") {
      let result = data.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setData(result);
    } else {
      setData(backupData);
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetchStories();
      setData(res.data);
      setBackupData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Stories";
    fetchData();
  }, []);

  return (
    <>
      <Navbar search={handleSearch} />

      <Container
        style={{
          marginTop: "2rem",
        }}
      >
        <Grid container spacing={5}>
          {data.length !== 0 ? (
            data.map((item, index) => (
              <Grow in timeout={(index + 1) * 500} key={index}>
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <Card data={item} reload={fetchData} />
                </Grid>
              </Grow>
            ))
          ) : (
            <Grid item xs={12} sm={12} lg={12}>
              <Paper elevation={6} style={{ textAlign: "center" }}>
                <Typography variant="h5">No stories to display</Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
      <Dialog
        reload={fetchData}
        dialogVisible={dialogVisible}
        setDialogVisible={setDialogVisible}
      />
      <FAB dialogVisible={dialogVisible} setDialogVisible={setDialogVisible} />
    </>
  );
}
