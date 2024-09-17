import './footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        <div className='body'>
        <footer>
            <div className="row">
                <div className="col">
                <img src='../LinkedIn cover - 3.png' alt='spark'className='logo'></img>
                <p>Team Spark Ignited is a group of students committed to sustainable transportation through innovative engineering.</p>
                </div>
                <div className="col">
                    <h3>Address <div className='underline'><span></span></div></h3>
                    <p></p>
                    <p>backstage M-Block <br></br> IET DAVV, Indore</p>
                    <p></p>
                    <p className='email-id'>sparkignited14@gmail.com</p>
                    <h4>+91 93993 24469</h4>
                </div>
                <div className="col">
                    <h3>Links <div className='underline'><span></span></div></h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        <li><Link to='/feedback'>feedback</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        {/* <li><a href='/admin'>AdminQueries</a></li> */}
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter <div className='underline'><span></span></div></h3>
                    <form action="">
                         <i class="fa-regular fa-envelope"></i>
                        <input type='email' placeholder='"enter your email id' required></input>
                        <button type='submit'><i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                    <div className="social-icons">
                    <a href="https://www.instagram.com/team_sparkignited/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.instagram.com/team_sparkignited/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/team-spark-ignited/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <p className='copyright'>&copy;2024 Copyright: Spark Ignited IET DAVV</p>
        </footer>
        
        </div>
       
        
        </>
    );
}


