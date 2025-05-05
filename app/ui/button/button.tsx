import Link from 'next/link';
import styles from './button.module.css';
import { openSans } from '@/app/ui/fonts';

export default function Button({ link, children }: { link: string; children?: React.ReactNode }) {
    return (
        <Link
            href={link}
            className={`${styles.btn} ${openSans.className}`}
        >
            {children}
        </Link>
    );
}