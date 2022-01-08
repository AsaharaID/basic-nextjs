/** @format */

import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<Layout pageTitle="Home Page">
			<Image src="/Champions_logo.png" width={200} height={200} alt="profile" />
			<h1 className={styles["title-homepage"]}>Avec Plaisir</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adip</p>
		</Layout>
	);
}
