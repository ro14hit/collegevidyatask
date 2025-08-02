"use client";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box, CircularProgress, Rating } from "@mui/material";


export default function UniversityCarousel({items}) {
    console.log("Carousel items:", items);
  return (
    <Box sx={{ width: "100%", maxWidth: 400, m: "auto" }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 600, mb: 2, letterSpacing: 1 }}
      >
        Manipal University
      </Typography>
      <Carousel
        indicators={true}
        autoPlay={false}
        swipe={true}
        navButtonsAlwaysVisible={false}
        sx={{ width: "100%", maxWidth: 400, m: "auto" }}
      >
        {items?.map((item, idx) => (
          <Paper
            key={idx}
            sx={{
              p: 2,
              textAlign: "center",
              backgroundColor: "#fff",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {item.title}
            </Typography>
            {idx === 1 ? (
              // Circular progress bar slide
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  mt: 2,
                  mx: "auto",
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={90}
                  size={100}
                  thickness={5}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    color="text.primary"
                  >{`90%`}</Typography>
                </Box>
              </Box>
            ) : idx === 2 ? (
              // Star rating slide
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Rating value={4.3} precision={0.1} readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  4.3/5 based on 500+ reviews
                </Typography>
              </Box>
            ) : idx === 3 ? (
              // Fee details slide
              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" color="primary" gutterBottom>
                  {item.fee}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {item.emi}
                </Typography>
              </Box>
            ) : (
              // Default slide
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            )}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}
