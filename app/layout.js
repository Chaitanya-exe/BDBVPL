import Header from "@/components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Watermark from "@/components/ui/watermark";

export const metadata = {
  title:
    "Top Solar Panel Solutions in Faridabad, Delhi & Palwal | Sustainable Energy for Your Future",
  description:
    "Discover affordable and reliable solar panel installation services in Faridabad, Delhi, and Palwal. Harness clean, renewable energy to reduce electricity bills and protect the planet with our customized solar solutions. Get a free consultation today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Header />
        {children}
        <Watermark />
        <Footer />
      </body>
    </html>
  );
}
