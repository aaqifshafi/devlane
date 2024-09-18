// import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css"

export const metadata = {
  title: "Devlane",
  description: "Design, develop, and deploy with Devlane.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
