import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css";

export const metadata = {
  title: "CETTS | The Future of Tailings",
  description: "Continuous Electrochemical Tailings Treatment System — A paradigm shift in tailings management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
