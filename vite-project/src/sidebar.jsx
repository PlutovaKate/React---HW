import css from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={css.aside}>
      <h2 className={css.h2}>Hydrated skin in 3 easy steps</h2>
      <p className={css.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique duis Cursus mi quis viverra
        ornare.
      </p>
      <nav>
        <ul className={css.ul}>
          <li>
            <a className={css.a} href="#">
              Healthy supplement
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Gluten-free
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Natural products
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Eco-friendly
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Vitamins
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Free shipping
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
