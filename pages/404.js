import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { menu } from "../data/data";
import styles from "../styles/components/NotFound.module.css";

export default function NotFound() {
  const [pageExists, setPageExists] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const foundMenu = menu.find((item) => item.link === router.asPath);
    if (foundMenu) setPageExists(true);
  }, [router]);

  return (
    <div className={styles.not_found}>
      <p className={styles.title}>
        {pageExists ? "Coming soon!" : "Page not found!"}
      </p>
      <Link href="/">
        <a className={styles.link}>Go Back to Home</a>
      </Link>
    </div>
  );
}
