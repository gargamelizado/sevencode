import style from '../Calltoaction/Calltoaction.module.css'
import Mac from '../../img/mac.png'
import Button from '../Button/button'
export default function Calltoaction() {
  return (
    <>
     <section className={style.Section}>
        <div className={style.section}>
            <div className={style.wrapperCalltoaction}>
                <div className={style.imgBox}>
                    <img src={Mac} alt="" />
                </div>
                <div className={style.boxText}>
                    <h2>É hora de se juntar aos milhares de criadores, artistas e desenvolvedores que usam Nineseven.</h2>
                <div className={style.boxBtn}>
                    <Button> Saiba mais</Button>
                </div>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}
