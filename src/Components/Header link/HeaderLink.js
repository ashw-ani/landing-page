import styles from "./HeaderLink.module.css";
const HeaderLink = (props) => {
  return <div className={styles.headerlink}>{props.title}</div>;
};
export default HeaderLink;
