import { plansData } from './data'
import whiteTick from '../assests/whitetick.jpg'
import styles from '../Styles/Plans.module.css'
const Plans = () => {
  return (
    <div className={styles.PlansContainer} id='plans'>
          {/* <div className={styles.programHeader} >
             <span className='stroke-text'>CS COSDDI</span>
             <span> COFFE</span>
             <span className='stroke-text'> TRAVEL MUG</span>
          </div> */}
          <div className={styles.Plans}>
            {plansData.map((data,i)=>{
               return  <div className={styles.plan} key={i}>
                    {data.icon}
                    <strong>{data.name}</strong>
                    <strong>$ {data.price}</strong>
                    <div className={styles.features}>
                        {data.features.map((feature,i)=>{
                           return <div className={styles.feature}>
                                <img src={whiteTick} alt='error'/>
                                <strong key={i}>{feature}</strong>
                            </div>
                        })}
                    </div>
                    <div>
                        <strong>See more benefits ...</strong>
                        
                    </div>
                    <button className={styles.btn}>Join now</button>
                </div>
            })}
          </div>
    </div>
)}

export default Plans
