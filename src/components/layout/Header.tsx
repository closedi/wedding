import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../../lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnScroll = () => {
      setMenuOpen(false);
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || toggleRef.current?.contains(target)) {
        return;
      }
      setMenuOpen(false);
    };

    window.addEventListener("scroll", closeOnScroll, { passive: true });
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="container header-inner">
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          ref={toggleRef}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`menu-icon ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="menu-label">{menuOpen ? "Закрыть" : "Меню"}</span>
        </button>
        <nav
          id="main-nav"
          className={`nav ${menuOpen ? "nav-open" : ""}`}
          aria-hidden={!menuOpen}
          ref={menuRef}
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <button
        type="button"
        className={`menu-backdrop ${menuOpen ? "is-visible" : ""}`}
        aria-label="Закрыть меню"
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
