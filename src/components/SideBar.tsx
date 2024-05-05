import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  ListSubheader,
  Card,
  CardHeader,
  Avatar,
  Badge,
} from "@mui/material";
import { User, Search, DollarSign } from "lucide-react";

function SideBar() {
  return (
    <div className="sidebar">
      <div style={{ padding: "5px" }}>
        <img
          src="https://jobs.weekday.works/_next/static/media/logo.268caeb2.png"
          alt="full-logo"
          style={{ width: "50%", padding: "10px" }}
        />
        <Divider
          sx={{ borderRadius: "10px", borderColor: "#ECEBEA", height: "4px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90%",
        }}
      >
        <List
          subheader={
            <ListSubheader component="div" sx={{ fontSize: "13px" }}>
              Looking For A Job
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <User color="black" />
            </ListItemIcon>
            <ListItemText primary="My Applied Jobs" sx={{ color: "gray" }} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Search color="black" />
            </ListItemIcon>
            <ListItemText primary="Search jobs" sx={{ color: "gray" }} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <DollarSign color="black" />
            </ListItemIcon>
            <div style={{ position: "relative" }}>
              <ListItemText
                primary="Search Salary"
                sx={{ color: "gray", position: "relative" }}
              />
              <Badge
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "#2ae8b4",
                  },
                }}
                badgeContent={"New"}
                color="primary"
                className="breathe"
                style={{ position: "absolute", top: 0, right: 0 }}
              />
            </div>
          </ListItemButton>
        </List>

        <Card sx={{ boxShadow: "none", width: "100%", maxWidth: "250px" }}>
          <CardHeader avatar={<Avatar variant="circular"></Avatar>} />
        </Card>
      </div>
    </div>
  );
}

export default SideBar;
