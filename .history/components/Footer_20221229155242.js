import Link from "next/link";
import React from "react";

export default function Footer() {
  return <footer className="sticky bottom-0 bg-white p-5 w-full">
    <Link href={'/'}>Home</Link>
    <Link href={'/checkout'}>Cart 0</Link>
  </footer>;
}
