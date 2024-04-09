import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">

            <Image
              src="/logo/logo.png" 
              alt="Logo"
              width={80} 
              height={80} 
            />
        </Link>
      </div>
    
    </header>
  );
};

export default Header;