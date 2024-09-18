import "./globals.css";
import theme from "@/app/utils/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Devlane",
  description: "Design, develop, and deploy with Devlane.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
