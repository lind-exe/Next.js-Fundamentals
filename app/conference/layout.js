import style from "./styles.css";

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header style={style.header}>
        GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE
      </header>
      <section>{children}</section>
    </>
  );
}
