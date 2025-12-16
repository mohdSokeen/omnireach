"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CssBaseline from "@mui/material/CssBaseline";

const NAVBAR_HEIGHT = 64;

const navItems = [
  ["Home", "#home"],
  ["Career", "#career"],
  ["Testimonial", "#testimonial"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navigation({ parentToChild, modeChange }) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault(); // ✅ stop instant jump

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -NAVBAR_HEIGHT;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      // ✅ smooth animated scroll
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      // ✅ update URL hash without reload
      window.history.pushState(null, "", `#${id}`);

      setMobileOpen(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          height: NAVBAR_HEIGHT,
          backgroundColor: mode === "dark" ? "#1D2452" : "#ffffff",
          color: mode === "dark" ? "#fff" : "#1D2452",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
        }}
        elevation={2}
      >
        <Toolbar sx={{ minHeight: NAVBAR_HEIGHT, height: NAVBAR_HEIGHT }}>
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ maxHeight: "150%", cursor: "pointer" }}
          />

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, marginLeft: "auto" }}>
            {navItems.map(([label, link]) => {
              const id = link.replace("#", "");
              return (
                <a
                  key={label}
                  href={link}
                  onClick={(e) => handleScroll(e, id)}
                  className="px-3 py-2 font-medium"
                >
                  {label}
                </a>
              );
            })}
            <IconButton
              onClick={modeChange}
              sx={{ color: mode === "dark" ? "#fff" : "#1D2452", ml: 1 }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, marginLeft: "auto" }}>
            <IconButton
              onClick={modeChange}
              sx={{ color: mode === "dark" ? "#fff" : "#1D2452" }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              onClick={() => setMobileOpen((prev) => !prev)}
              sx={{ color: mode === "dark" ? "#fff" : "#1D2452" }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              backgroundColor: mode === "dark" ? "#1D2452" : "#fff",
              color: mode === "dark" ? "#fff" : "#1D2452",
              px: 2,
              pb: 2,
              borderTop: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            {navItems.map(([label, link]) => {
              const id = link.replace("#", "");
              return (
                <a
                  key={label}
                  href={link}
                  onClick={(e) => handleScroll(e, id)}
                  className="py-2 font-medium"
                  style={{ cursor: "pointer" }}
                >
                  {label}
                </a>
              );
            })}
          </Box>
        )}
      </AppBar>

      {/* Spacer */}
      <Box sx={{ height: NAVBAR_HEIGHT }} />
    </Box>
  );
}
