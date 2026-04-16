import Image from "next/image";

import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <div>
        <h1>Hi, im Leonardo!👋</h1>
        <h2>Desenvolvedor </h2>
      </div>
      <Image
        src="/eu.leo.jpeg"
        alt="Leonardo"
        width={325}
        height={310}
        priority
      />
    </div>
  );
}
