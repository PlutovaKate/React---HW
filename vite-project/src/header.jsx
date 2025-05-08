import css from "./header.module.css";

export function Header() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.ul}>
          <li>
            <a className={css.a} href="#">
              Products
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Story
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Blog
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Collections
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Contact
            </a>
          </li>
          <li>
            <a className={css.a} href="#">
              Subscribe
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

<li>
  <a href="#">Products</a>
</li>;
