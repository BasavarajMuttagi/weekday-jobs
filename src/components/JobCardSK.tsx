import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Skeleton,
  Typography,
} from "@mui/material";

import { Zap } from "lucide-react";
import Card from "@mui/material/Card";

function JobCardSK() {
  return (
    <Card
      variant="outlined"
      style={{
        maxWidth: 350,
        height: 580,
        borderRadius: 10,
        padding: 5,
      }}
      sx={{ boxShadow: 2 }}
    >
      <Chip
        label={
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 1,
            }}
          >
            <Typography fontSize={14}>⏳</Typography>
            <Typography fontSize={10}>Posted 10 days ago</Typography>
          </Box>
        }
        variant="outlined"
        size="small"
        style={{ fontSize: 8, marginLeft: 16, marginTop: 10 }}
      />
      <CardHeader
        avatar={<Avatar variant="square"></Avatar>}
        title={
          <Typography
            fontSize={16}
            sx={{
              ":hover": { textDecoration: "underline" },
              cursor: "pointer",
            }}
          >
            <Typography
              variant="subtitle1"
              color="GrayText"
              component={"a"}
              style={{ textDecoration: "none" }}
            >
              <Skeleton />
            </Typography>
          </Typography>
        }
        subheader={
          <Box>
            <Typography
              variant="h6"
              color={"InfoText"}
              fontSize={16}
              sx={{ textTransform: "capitalize" }}
            >
              <Skeleton />
            </Typography>
            <Typography
              variant="subtitle2"
              color={"CaptionText"}
              fontSize={12}
              sx={{ textTransform: "capitalize" }}
            >
              <Skeleton />
            </Typography>
          </Box>
        }
      />
      <Typography
        variant="body1"
        color="GrayText"
        paddingX={"16px"}
        fontSize={16}
      >
        <Skeleton />
      </Typography>
      <CardContent
        style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 6,
              position: "relative",
            }}
            className="blurEffect"
          >
            <Typography
              variant="body1"
              color="black"
              fontSize={16}
              fontWeight={500}
            >
              About Company:
            </Typography>
            <Typography
              variant="body1"
              color="black"
              fontSize={14}
              fontWeight={600}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: 150, overflow: "hidden", fontSize: 13 }}
            >
              <Skeleton />
            </Typography>
            <Typography
              variant="body1"
              color="black"
              fontSize={14}
              fontWeight={600}
            >
              Founder/Recruiter profiles:
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              color="#4943da"
              fontSize={16}
              fontWeight={500}
              onClick={() => alert("Job")}
              position={"absolute"}
              sx={{
                bottom: 20,
                zIndex: 2,
                cursor: "pointer",
              }}
            >
              View job
            </Typography>
          </div>
        </div>
        <Box>
          <Typography
            variant="body1"
            color="GrayText"
            fontSize={14}
            fontWeight={600}
          >
            Minimum Experience
          </Typography>
          <Typography
            variant="body1"
            color="black"
            fontSize={14}
            fontWeight={400}
          >
            <Skeleton /> years
          </Typography>
        </Box>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              rowGap: 1,
            }}
          >
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#55efc4", borderRadius: 10 }}
              sx={{
                color: "black",
                textTransform: "capitalize",
                width: "100%",
                boxShadow: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 1,
                }}
              >
                <Zap fill="orange" stroke="orange" size={18} />
                <Typography>Easy Apply</Typography>
              </Box>
            </Button>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#4943da", borderRadius: 10 }}
              sx={{
                color: "white",
                textTransform: "capitalize",
                width: "100%",
                boxShadow: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 1,
                }}
              >
                <Avatar
                  variant="circular"
                  sx={{ height: 20, width: 20 }}
                  className="bg-blur"
                ></Avatar>
                <Avatar
                  variant="circular"
                  sx={{ height: 20, width: 20 }}
                  className="bg-blur"
                ></Avatar>
                <Typography sx={{ textWrap: "nowrap" }}>
                  Unlock referral asks
                </Typography>
              </Box>
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default JobCardSK;
