import { Button } from "@wowjob/client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button>button</Button>
      <Button>button</Button>
      <div>
        <Link href="test">test</Link>
      </div>
    </main>
  );
}
