// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Digital Library",
  description: "Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        {/* HEADER PINK */}
      

        {/* HALAMAN */}
        <div className="p-0">
          {children}
        </div>
      </body>
    </html>
  );
}
