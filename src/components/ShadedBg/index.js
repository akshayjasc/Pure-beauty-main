import background from '../../img/parallex.jpg'
import './style.css'

const ShadedBg = () =>{
    return(
        <div className="shaded-bg">
            <img src={background} alt='' className='w-100'/>
        </div>
    )
}

export default ShadedBg