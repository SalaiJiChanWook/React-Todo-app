import footStyle from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={footStyle.footer}>
      <span className={footStyle.iteam}>
        ပြီးမြောက်သွားသော အရာများ = {completedTodos}
      </span>
      <span className={footStyle.iteam}>
        စုစုပေါင်းလုပ်ရမည့်အရာများ = {totalTodos}
      </span>
    </div>
  );
}
