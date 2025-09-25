import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/WriteDown">
        <button className={styles.mainButton}>Start</button>
      </Link>
    </div>
  );
}
