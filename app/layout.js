import Navbar from "@/app/_components/Navbar";

import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";

export const metadata = {
  title: {
    template: "%s Ad Equation",
    default: "Ad Equation / Chasseur Immobilier",
  },

  description:
    "Nous cherchons, vous trouvez... sans effort ! A vos côtés pour défendre vos intérêts et vous assere le meilleur choix, en toute sérénité.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
