import Image from "next/image";

import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>hi, i´m Leonardo!👋</h1>
        <h2>Web Developer</h2>
      </div>
      <Image
        src="/me.jpeg"
        alt="Next.js Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  );
}
