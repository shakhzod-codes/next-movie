import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { menu } from "../data/data";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <Link href="/">
          <a className={styles.title}>PcariMovie</a>
        </Link>
        <div className={styles.navlinks}>
          {menu.map((item) => (
            <Link href={item.link} key={item.id}>
              <a
                className={
                  router.pathname === item.link
                    ? styles.active
                    : styles.inactive
                }
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.header_right}>
        <Link href="/search?search_by=theatre">
          <a className={styles.search}>
            <Image
              src="/images/search_light.svg"
              width={24}
              height={24}
              alt="icon search"
            />
          </a>
        </Link>
        <div className={styles.profile}>
          <div></div>
          <p>John Glich</p>
        </div>
      </div>
    </header>
  );
}
