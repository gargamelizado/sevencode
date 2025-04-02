import Logo from "../../img/logo-menu.svg";
import Button from "../Button/button";
import style from "../Header/Header.module.css";
export default function Header() {
  return (
    <>
      <header className={style.Header}>
        <div className={style.header}>
          <div className={style.wrapperHeader}>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className={style.headerMenu}>
              <ul className={style.menu}>
                <li>
                  <a href="">Inicio</a>
                </li>
                <li>
                  <a href="">Sobre</a>
                </li>
                <li>
                  <a href="">Linguagem</a>
                </li>
                <li>
                  <a href="">Documentação</a>
                </li>
                <li>
                  <Button>Login </Button>
                </li>
                <li>
                  <Button> Registro</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
