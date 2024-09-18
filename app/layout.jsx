import "./globals.css";
import theme from "@/app/utils/theme.js";
import { ThemeProvider } from "@mui/material/styles";

export const metadata = {
  title: "Devlane",
  description: "Design, develop, and deploy with Devlane.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
