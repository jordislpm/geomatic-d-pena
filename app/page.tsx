import Image from "next/image";
import styles from "./page.module.css";
import HomeView from "@/app/home/page";
import Hero from "@/components/Home/HomeHero/HomeHero";

export default function Home() {
  return (
    <main className={styles.main}>
     <HomeView/>
    </main>
  );
}
