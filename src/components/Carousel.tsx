"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Typography,
  Box,
  CircularProgress,
  Rating,
  Chip,
} from "@mui/material";

interface CarouselItem {
  title: string;
  description: string;
  fee?: string;
  emi?: string;
}

interface UniversityCarouselProps {
  items?: CarouselItem[];
  universityName?: string;
}

export default function UniversityCarousel({
  items = [],
  universityName = "Manipal University",
}: UniversityCarouselProps) {
  return (
    <Box sx={{ width: "100%", maxWidth: 400, m: "auto" }}>
      {/* Render dynamic university name */}
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 600, mb: 2, letterSpacing: 1 }}
      >
        {universityName}
      </Typography>

      <Carousel
        indicators={true}
        autoPlay={false}
        swipe={true}
        navButtonsAlwaysVisible={false}
        sx={{
          width: "100%",
          maxWidth: 400,
          m: "auto",
          // height: 260,
          overflow: "hidden",
        }}
      >
        {items.map((item, idx) => (
          <Paper
            key={idx}
            sx={{
              p: 2,
              textAlign: "left",
              backgroundColor: "#fff",
              height: 260,
              display: "flex",
              flexDirection: "column",
              border: "1px solid #e0e0e0",
              gap: 2,
            }}
          >
            <Box sx={{ alignSelf: "flex-start" }}>
              <Chip
                label={item.title}
                color="primary"
                sx={{ fontWeight: 500, letterSpacing: 0.5, border: "none" }}
              />
            </Box>

            {idx === 1 ? (
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
                  <Typography variant="h6" component="div" color="text.primary">
                    90%
                  </Typography>
                </Box>
              </Box>
            ) : idx === 2 ? (
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Rating value={4.3} precision={0.1} readOnly />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  4.3/5 based on 500+ reviews
                </Typography>
              </Box>
            ) : idx === 3 ? (
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Typography variant="h4" color="primary" gutterBottom>
                  {item.fee}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {item.emi}
                </Typography>
              </Box>
            ) : (
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
