import { Power } from 'phosphor-react';
import logo from '../assets/logo.svg';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} className={styles.logo} alt="logo" />
			<div className={styles.profileInfo}>
				<div className={styles.profile} />
				<div>
					<h3>Bem vindo,</h3>
					<h2>Nome do usuário</h2>
				</div>
			</div>
			<Power />
		</header>
	);
}
