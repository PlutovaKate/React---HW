import css from "./hero.module.css";

export function Hero() {
  return (
    <div className={css.div}>
      <h1 className={css.h1}>The most trusted products by our customers</h1>
      <p className={css.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
    </div>
  );
}
