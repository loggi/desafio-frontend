import imgMobile from '../../Assets/imgMobile.png'
import './Image.css'

const ImageMobile = () => {
    return (
       <figure className='mobile-image'>
          <img src={imgMobile} className='img-mobile' alt="img mobile" />
       </figure>       
    )
}

export default ImageMobile; 