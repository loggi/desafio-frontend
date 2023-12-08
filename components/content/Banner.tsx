import style from './Banner.module.sass';

export const Banner = () => {
    return (
        <section className = {style.banner}>
            <div className="grid">
                <div className={style.box}>
                    <h2 className={style.box__title}>Acompanhe com a Loggi a entrega do seu pedido. </h2>
                    <label className={style.box__label} htmlFor="input-code">Código de rastreamento</label>
                    <input 
                        autoFocus
                        className={style.input} 
                        id="input-code"
                        placeholder='Digite o código de rastreamento aqui...'
                        type="text" 
                    />
                    <button className={style.button} >Acompanhar pedido</button>
                </div>
            </div>
        </section>
    )
}