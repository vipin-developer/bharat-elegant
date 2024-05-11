"use client";
import { useState } from "react";
import VideoPlayer from "../../components/videoplayer/VideoPlayer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Box,
  Button,
  CardActions,
  CardMedia,
  Grid,
  Modal,
} from "@mui/material";
import styles from "./page.module.css";
import Footer from "../../components/footer/Footer";
import AppAppBar from "../../components/appappbar/AppAppBar";
const three60Videos = () => {
  const [modal, setModal] = useState(false);
  const [video, setCurrentVideo] = useState(false);

  const videoList = [
    {
      title: "",
      url: "static/preview.mp4",
    },
    {
      title: "",
      url: "static/coast.mp4",
    },
    {
      title: "",
      url: "static/preview.mp4",
    },
    {
      title: "",
      url: "static/preview.mp4",
    },
    {
      title: "",
      url: "static/preview.mp4",
    },
  ];

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <AppAppBar showLinks={false} />
      <div className={styles.VideoPage}>
        <Grid container>
          {videoList.map((video, index) => {
            return (
              <Grid xs={6} sm={4} md={3} key={index}>
                <Card
                  variant="outlined"
                  sx={{ maxWidth: 345 }}
                  className={styles.videoCard}
                >
                  <CardMedia
                    sx={{ height: 250 }}
                    image="https://picsum.photos/seed/picsum/200"
                    title="green iguana"
                  />
                  <CardContent></CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        setCurrentVideo(video?.url);
                        setModal(true);
                      }}
                    >
                      Open
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        setCurrentVideo(video?.url);
                        setModal(true);
                      }}
                    >
                      Open VR
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <VideoPlayer videoUrl={video} />
          </Box>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default three60Videos;
