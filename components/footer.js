import Image from "next/image";
import { footerMenu, footerContact } from "../data/data";
import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <h2 className={styles.title}>PcariMovie</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
        <p className={styles.label}>Join Newsletters</p>
        <div className={styles.input}>
          <input type="email" placeholder="Insert your mail here"></input>
          <button type="button">
            <Image
              src="/images/arrow.svg"
              alt="icon arrow"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.menu}>
          {footerMenu.map((menu) => {
            return (
              <div className={styles.menuItem} key={menu.id}>
                <h6>{menu.name}</h6>
                <div>
                  {menu.links.map((link) => {
                    return <p key={link.id}>{link.name}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.contact}>
          {footerContact.map((contact) => {
            return (
              <div key={contact.id}>
                <div>
                  <Image
                    src={contact.icon}
                    alt={contact.alt}
                    width={20}
                    height={20}
                  />
                </div>
                <p>{contact.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
