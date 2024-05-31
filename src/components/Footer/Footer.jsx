import info from "../../data/contactInfo"
//import icons from ''
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div>
      {/**********************Additional**********************/}
      <div>
        <h1>Additional</h1>
        <ul>
          <li><a href="">Contact Us</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Privacy Policy and Cookies</a></li>
        </ul>
        <div>
          <input
            type="email"
            placeholder='example@mail.com'/>
          <button>JOIN US</button>
        </div>
      </div>
      {/**********************Services**********************/}
      <div>
        <h1>Services</h1>
        <ul>
          <li><a href="">Business Consulting</a></li>
          <li><a href="">Company Formation Service</a></li>
          <li><a href="">Full Accounting And Tax Support</a></li>
          <li><a href="">Self-employment registration (UTR)</a></li>
          <li><a href="">Self-Assessment Tax Return</a></li>
        </ul>
      </div>
      {/**********************Questions**********************/}
      <div>
        <h1>Questions</h1>
        <ul>
          <li>{info.location}</li>
          <li>{info.tel}</li>
          <li>{info.email}</li>
        </ul>
        <ul>
          <li><a href="">insta</a></li>
          <li><a href="">youtube</a></li>
          <li><a href="">facebook</a></li>
          <li><a href="">watsup</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
