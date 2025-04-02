import style from '../Calltoaction/Calltoaction.module.css'
import Mac from '../../img/mac.png'
import Button from '../Button/button'
export default function Calltoaction() {
  return (
    <>
     <section className={style.Section}>
        <div className="section">
            <div className="wrapperCalltoaction">
                <div className="imgBox">
                    <img src={Mac} alt="" />
                </div>
                <div className="boxText">
                    <h2>É hora de se juntar aos milhares de criadores, artistas e desenvolvedores que usam Nineseven.</h2>
                </div>
                <div className="boxBtn">
                    <Button> Saiba mais</Button>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}
