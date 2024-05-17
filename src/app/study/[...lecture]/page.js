"use client";
import Link from "next/link";

export default function Study({ params }) {
  return (
    <div>
      <h1>Study details</h1>
      <Link href="/">Home</Link>
      <p>Book for study {params.lecture[0]}</p>
      <p>Day of study {params.lecture[1]}</p>
    </div>
  );
}
