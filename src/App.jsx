// 1. Removemos o useState que não estava sendo usado
import styles from "./styles.module.css";
import { PasswordGenerator } from "./componentes/PasswordGenerator";

function App() {
  return (
    <main className={styles.appContainer}>
      <PasswordGenerator />
    </main>
  );
}

export default App;