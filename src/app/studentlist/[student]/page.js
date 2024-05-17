"use client";
import Link from "next/link";

export default function Student({ params }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Name : {params.student}</h1>
    </div>
  );
}
