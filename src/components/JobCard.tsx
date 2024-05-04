import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import { Zap } from "lucide-react";
import Card from "@mui/material/Card";
import { useState } from "react";
function JobCard() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Card
      variant="outlined"
      style={{
        maxWidth: 350,
        height: "100%",
        borderRadius: 10,
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.02)" : "",
        padding: 1,
      }}
      sx={{ boxShadow: 2 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <Typography variant="subtitle1" color="GrayText" fontSize={16}>
            Firefly
          </Typography>
        }
        subheader={
          <Box>
            <Typography variant="h6" color={"InfoText"} fontSize={16}>
              Frontend Engineer
            </Typography>
            <Typography variant="subtitle2" color={"CaptionText"} fontSize={12}>
              India
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
        Estimated Salary : ₹ 18 - 20 LPA
      </Typography>
      <CardContent
        style={{ display: "flex", flexDirection: "column", rowGap: 20 }}
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
              rowGap: 10,
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
            <Typography variant="body2" color="text.secondary">
              Firefly is a Cloud Asset Management solution that enables DevOps,
              SRE, and Cloud Platform teams to rediscover their entire cloud
              footprint, understand which parts of it are codified vs unmanaged,
              detect drifts to prevent service failures, classify assets using
              Policy-as-Code, and manage a single inventory of all their cloud
              resources across Multi-Cloud, and Kubernetes clusters.
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
            4 years
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
                paddingY: 1.5,
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
                paddingY: 1.5,
                boxShadow: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 2,
                }}
              >
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

export default JobCard;
