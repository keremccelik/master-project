import styles from "./container.module.css";
export default function Container({ children }) {
  return <main className={styles.container}>{children}</main>;
}
