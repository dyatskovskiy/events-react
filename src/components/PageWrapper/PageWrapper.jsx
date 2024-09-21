import css from "./PageWrapper.module.css";

export const PageWrapper = ({ children }) => {
  return <main className={css.wrapper}>{children}</main>;
};
