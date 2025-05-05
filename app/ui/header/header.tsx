import styles from "./header.module.css";
import { Poetsen_One } from "next/font/google";


const poetsenOne = Poetsen_One({
    weight: '400',
    subsets: ['latin'],
  });

export default function Header() {
    return (
        <header className={`${styles.headerSection} ${poetsenOne.className}`}>
            <h1> Book Worming </h1>
        </header>
    )
}