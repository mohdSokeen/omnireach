// app\components\Navigation.jsx
"use client";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemText from "@mui/material/ListItemText";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListItemButton from "@mui/material/ListItemButton";

const drawerWidth = 240;
const navItems = [
  ["Home", "home"],
  ["Career", "career"],
  ["Testimonial", "testimonial"],
  ["About", "about"],
  ["Contact", "contact"],
];

export default function Navigation({ parentToChild, modeChange }) {
  const { mode } = parentToChild;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
      if (window.scrollY > 50) {
        let current = "home";
        navItems.forEach(([label, id]) => {
          const section = document.getElementById(id);
          if (section) {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.offsetHeight;
            if (
              window.scrollY >= sectionTop &&
              window.scrollY < sectionTop + sectionHeight
            ) {
              current = id;
            }
          }
        });

        setActiveSection(current);

        // 👇 URL update on scroll
        const newUrl = `#${current}`;
        if (window.location.pathname !== newUrl) {
          window.history.pushState(null, "", newUrl);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setActiveSection("home");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (window.location.hash !== "#home") {
      window.history.replaceState(null, "", "#home");
    }
  }, []);


  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -64; // navbar height ke hisaab se adjust karo
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveSection(section);
    setTimeout(() => {
      const newUrl = `#${section}`;
      if (window.location.hash !== newUrl) {
        window.history.pushState(null, "", newUrl);
      }
    }, 600);
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map(([label, id]) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(id)}
              className="justify-center outline-none"
            >
              <ListItemText
                primary={label}
                sx={{
                  color: activeSection === id ? "#F7931E" : "", //
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton
            sx={{ justifyContent: "center" }}
            onClick={modeChange}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        // elevation={0}
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
        sx={{
          height: 64,
          // boxShadow: "none",
        }}
      >
        <Toolbar
          className="navigation-bar"
          sx={{ minHeight: 64, height: 64 }}
        >
          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Omnireach logo */}
          <img
            src="/images/logo.png"
            alt="Omnireach Logo"
            style={{
              maxHeight: "150%",
              width: "auto",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />

          {/* Desktop nav + toggle */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            {navItems.map(([label, id]) => (
              <button
                type="button"
                key={label}
                onClick={() => scrollToSection(id)}
                className="px-3 py-2 select-none outline-none focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                style={{
                  color: activeSection === id ? "#F7931E" : "",
                }}
              >
                {label}
              </button>
            ))}

            <IconButton
              onClick={modeChange}
              sx={{
                color: mode === "dark" ? "#fff" : "#1D2452",
                ml: 1,
              }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
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
      </nav>
    </Box>
  );
}
