"use client";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CssBaseline from "@mui/material/CssBaseline";

const NAVBAR_HEIGHT = 64; // Navbar height in px

const navItems = [
  ["Home", "#home"],
  ["Career", "#career"],
  ["Testimonial", "#testimonial"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navigation({ parentToChild, modeChange }) {
  const { mode } = parentToChild;

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -NAVBAR_HEIGHT;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className="navbar-fixed-top"
        sx={{
          height: NAVBAR_HEIGHT,
          backgroundColor: mode === "dark" ? "#1D2452" : "#ffffff", // dark mode vs light mode
          color: mode === "dark" ? "#ffffff" : "#1D2452",            // text/icons color
        }}
        elevation={2}
      >
        <Toolbar sx={{ minHeight: NAVBAR_HEIGHT, height: NAVBAR_HEIGHT }}>
          {/* Logo */}
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

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", marginLeft: "auto" }}>
            {navItems.map(([label, link]) => {
              const id = link.replace("#", "");
              return (
                <a
                  key={label}
                  href={link}
                  onClick={(e) => handleScroll(e, id)}
                  className="px-3 py-2 select-none outline-none font-medium"
                >
                  {label}
                </a>
              );
            })}

            {/* Dark / Light Toggle */}
            <IconButton onClick={modeChange} sx={{ color: mode === "dark" ? "#fff" : "#1D2452", ml: 1 }}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* Mobile Icons */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, marginLeft: "auto", alignItems: "center", gap: 1 }}>
            <IconButton onClick={modeChange} sx={{ color: mode === "dark" ? "#fff" : "#1D2452" }}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
