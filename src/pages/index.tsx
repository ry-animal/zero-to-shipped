import { Suspense } from "react"
import Link from "next/link"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import styles from "src/styles/Home.module.css"
import UserInfo from "src/components/UserInfo"

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>

      <footer className={styles.footer}>
        <span>Powered by</span>
        <a
          href="https://blitzjs.com?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.textLink}
        >
          Blitz.js
        </a>
      </footer>
    </Layout>
  )
}

export default Home
