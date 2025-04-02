import style from '../Hero/Hero.module.css'
import Spiral from '../../img/IMAGE.png'
import Button from "../Button/button";
export default function Hero() {
  return (
    <>
      <section className={style.Section}>
        <div className={style.section}>
          <div className={style.wrapperHero}>
            <div className={style.boxContene}>
              <div className={style.boxText}>
                <h2>Poderoso para Devs.
                Rápido e fácil uso.</h2>
                <p>Leve nossa IDE para sua equipe. Ninesevem oferece suporte a experiências para usuários avançados, novos consumidores e todos os demais.</p>
              </div>
              <div className={style.boxBtn}>
                <Button>Saiba mais</Button>
                <Button>Sobre nós</Button>
              </div>
            </div>
            <div className="boxImg">
              <img src={Spiral} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
