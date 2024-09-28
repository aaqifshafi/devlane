// app/components/Header.js
"use client"; // This should be a client component
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <div className="flex-grow">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Devlane"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="antialiased">
            <Link href="/services">
              <Button color="inherit">Services</Button>
            </Link>
            <Link href="/about">
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/projects">
              <Button color="inherit">Projects</Button>
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
