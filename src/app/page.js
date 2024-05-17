"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [name, setName] = useState("Dileep");
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <Link href="/login">Login page</Link>
      <Link href="/about">About page</Link>
      <button onClick={() => navigate("/login")} className="btn btn-info">
        Login
      </button>
      <button onClick={() => navigate("/about")} className="btn btn-info">
        About
      </button>
      This is a home page {name}
      <ul>
        <li>
          <Link href="/studentlist/dileep">Dileep</Link>
        </li>
        <li>
          <Link href="/studentlist/1">Ajay</Link>
        </li>
        <li>
          <Link href="/studentlist/sanjay">Sanjay</Link>
        </li>
        <li>
          <Link href="/studentlist/rohan">Rohan</Link>
        </li>
      </ul>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>user name is {props.name}</h1>
    </div>
  );
};
