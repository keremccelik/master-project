import styles from "./page.module.css";
import Container from "../components/Commons/Container/Container";
import Grid from "../components/Commons/Grid/Grid";

export default function Test() {
  return (
    <main>
      <Container>
        <Grid>
          <div className={styles.module1}>SLİDE</div>
          <div className={styles.module2}>FİYAT</div>
          <div className={styles.module3}>AGENT</div>
          <div className={styles.module4}>SPECS</div>
          <div className={styles.module5}>HARİTA</div>
          <div className={styles.module6}>AÇIKLAMA</div>
        </Grid>
      </Container>
    </main>
  );
}
