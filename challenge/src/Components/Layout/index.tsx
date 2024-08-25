import { useRouter } from "next/router";
import { Header } from "./Header/header";
import { useContextGlobal } from "@/Context";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

    return (
      <div className="flex flex-col flex-grow p-4 bg-slate-50 min-h-screen h-full">
        <header className={`${router.pathname === "/login" ? "hidden" : "flex"} flex justify-center`}>
          <Header />
        </header>

        <main>
            {children}
        </main>
      </div>
    );
  };