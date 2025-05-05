import styles from "./header.module.css";
import { poetsenOne } from "@/app/ui/fonts";

export default function Header() {
    return (
        <header className={`${styles.headerSection} ${poetsenOne.className}`}>
            <h1> Book Worming </h1>
        </header>
    )
}