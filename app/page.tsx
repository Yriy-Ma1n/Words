import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      
        <Link href="/WriteDown" className={styles.mainButton}>
          <button >Start</button>
        </Link>
        <Link href="/setting" className={styles.mainButton}>
          <button>Setting</button>
        </Link>
     
    </div>
  );
}
