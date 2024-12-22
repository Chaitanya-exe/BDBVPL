"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import logo from "@/public/images/logo.jpg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HelpIcon from "@mui/icons-material/Help";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { usePathname, useRouter } from "next/navigation";

const drawerWidth = 240;

function Layout(props) {
  const { children } = props;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [isCollapse, setisCollapse] = useState(false);

  const Router = useRouter();
  const Pathname = usePathname();

  const handleCollapse = () => {
    setisCollapse(!isCollapse);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Image width={45} height={45} src={logo} alt="Logo" />
        <Typography variant="h6" noWrap component="div">
          BDBVPL
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {["Dashboard", "Analytics", "Queries"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            className={
              Pathname.startsWith(`/admin/${text.toLowerCase()}`)
                ? "text-green bg-slate-100"
                : "text-slate-700"
            }
            onClick={() => {
              Router.push(`/admin/${text.toLowerCase()}`);
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <InsightsIcon />}
                {index === 2 && <QueryStatsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />
        <ListItem
          disablePadding
          onClick={() => {
            handleCollapse();
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <MoreVertIcon />
            </ListItemIcon>
            <ListItemText primary="More" />
            {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
      </List>

      <Collapse in={isCollapse} timeout="auto" unamountOnExit="true">
        <List className="ml-4">
          {["Sales", "Help", "Logout"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              className={
                Pathname.startsWith(`/admin/${text.toLowerCase()}`)
                  ? "text-green-600 bg-slate-100"
                  : "text-slate-700"
              }
              onClick={() => {
                Router.push(`/admin/${text.toLowerCase()}`);
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AttachMoneyIcon /> : <HelpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "green",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
  children: PropTypes.array,
};

export default Layout;
