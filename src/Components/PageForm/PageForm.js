import styles from "./PageForm.module.css";
const PageForm = (props) => {
  return (
    <div className={styles.pageform}>
      <form className={styles.userform}>
        <label for="username">Username</label>
        <input
          className={styles.inputfield}
          type="text"
          name="username"
          required
        />
        <label for="Password">Password</label>
        <input
          className={styles.inputfield}
          type="password"
          name="password"
          required
        />
        <label>Gender</label>
        <div className={styles.xc}>
          <>
            <input type="radio" name="gender" value="Male" required />
            <label for="gender">Male</label>
          </>
          <>
            <input type="radio" name="gender" value="Female" required />
            <label for="gender">Female</label>
          </>
        </div>
        <label for="Skills">Skills:</label>

        <select
          name="skills"
          id="skills"
          className={styles.inputfield}
          required
        >
          <option value="JavaScript">JavaScript</option>
          <option value="React.Js">React.Js</option>
          <option value="API">API</option>
          <option value="Backend">Backend</option>
        </select>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default PageForm;

// Username, Password, Gender (radio button),
// Skills (JS,React,API,Backend - as a drop down)Submit
