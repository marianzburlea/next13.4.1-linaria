"use client";

import { Button } from "@wowjob/client";
import Link from "next/link";

export default function Test() {
  return (
    <main>
      <Button>button</Button>
      <div>
        <Link href="/">home</Link>
      </div>
    </main>
  );
}
