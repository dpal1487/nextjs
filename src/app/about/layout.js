"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/about/aboutstudent" ? (
        <div>
          <h1>Common Layout</h1>
          <Link href="/about/aboutcollege" className="m-5">
            About College
          </Link>
          <Link href="/about/aboutstudent">About Student</Link>
        </div>
      ) : null}
      {children}
    </div>
  );
}
