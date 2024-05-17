"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Login Page
      <Link href="/" className="m-5">
        Home
      </Link>
      <Link href="/login/logincollege">Login College</Link>
      <Link href="/login/loginstudent" className="m-5">
        Login Student
      </Link>
    </main>
  );
}
