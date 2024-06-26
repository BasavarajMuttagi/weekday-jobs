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
import getSymbolFromCurrency from "currency-symbol-map";
import { Zap } from "lucide-react";
import Card from "@mui/material/Card";
import { useState } from "react";
import { Job } from "../helpers/types";

function JobCard({ job }: { job: Job }) {
  const [hovered, setHovered] = useState(false);
  const currencySymbol = getSymbolFromCurrency(job.salaryCurrencyCode);
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
        height: 580,
        borderRadius: 10,
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.02)" : "",
        padding: 5,
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
        avatar={<Avatar variant="square" src={job.logoUrl}></Avatar>}
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
              href={job.jdLink}
              style={{ textDecoration: "none" }}
            >
              {job.companyName}
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
              {job.jobRole}
            </Typography>
            <Typography
              variant="subtitle2"
              color={"CaptionText"}
              fontSize={12}
              sx={{ textTransform: "capitalize" }}
            >
              {job.location}
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
        {`Estimated Salary : ${currencySymbol}${job.minJdSalary}k - ${currencySymbol}${job.maxJdSalary}k ${job.salaryCurrencyCode}`}
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
              {job.jobDetailsFromCompany}
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
            {job.minExp} years
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

export default JobCard;
