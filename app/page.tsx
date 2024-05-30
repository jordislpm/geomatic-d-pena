import Image from "next/image";
import styles from "./page.module.css";
import HomeView from "@/screens/Home";
import Hero from "@/components/Home/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
     <HomeView/>
    </main>
  );
}
