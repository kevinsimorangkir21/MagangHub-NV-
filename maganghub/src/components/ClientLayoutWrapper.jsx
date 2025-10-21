"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Render ulang setelah di-mount client
  }, []);

  const hideLayout = ["/login", "/register", "/dashboard", "/lupa-kata-sandi"];
  const shouldHide = hideLayout.some((path) => pathname.startsWith(path));

  // Hindari render sebelum mounted agar HTML sama antara server dan client
  if (!mounted) return null;

  return (
    <>
      {!shouldHide && <Navbar />}
      <main className={!shouldHide ? "pt-20" : ""}>{children}</main>
      {!shouldHide && <Footer />}
    </>
  );
}
