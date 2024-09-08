// const header = { color: "blue", fontSize: "140px" };
// import "../css/style.css";
import styles from "./inlinecomponent.module.css";
export default function InlineComponent() {
  return (
    <div>
      {/* <h1 style={header}>InlineComponent</h1> */}
      {/* <h1 className="inline-header">InlineComponent</h1> */}
      <h1 className={styles.header}>Inline Component</h1>
    </div>
  );
}
