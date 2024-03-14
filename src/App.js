import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import HeaderLink from "./Components/Header link/HeaderLink";
import PageForm from "./Components/PageForm/PageForm";

function App() {
  return (
    <div className={styles.App}>
      <Header heading="Page Heading">
        <HeaderLink title="Home"></HeaderLink>
        <HeaderLink title="About Us"></HeaderLink>
      </Header>

      <PageForm></PageForm>
    </div>
  );
}

export default App;
