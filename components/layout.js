import Footer from './footer';
import Header from './header';
import styles from '../styles/components/Layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={styles.layout}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
