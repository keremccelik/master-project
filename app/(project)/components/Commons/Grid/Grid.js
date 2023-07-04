import styles from "./Grid.module.css";
export default function Grid({ children }) {
  return <main className={styles.grid}>{children}</main>;
}
