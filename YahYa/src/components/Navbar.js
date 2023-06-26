import React, {useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes,FaShoppingCart} from "react-icons/fa"
import {AiFillHome,AiFillCar,AiFillHeart} from 'react-icons/ai'
import logo from '../Images/logo.png'
// import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
import {MdFlight,MdLocalHotel} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'


const Navbar=()=> {
    const[click,setClick]=useState(false);
    const[color ,setColor]=useState(false);

    const colorChange=()=>{
        if(window.scrollY>100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",colorChange);

    const handleClick = () =>{
    setClick(!click);
  }


//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       const scrollPosition = window.scrollY;

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;

//         if (
//           scrollPosition >= sectionTop - 50 && // Adjust offset as needed
//           scrollPosition < sectionTop + sectionHeight - 50 // Adjust offset as needed
//         ) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


// const [isDarkMode, setIsDarkMode] = useState(false);

// useEffect(() => {
//   const root = window.document.documentElement;
//   if (isDarkMode) {
//     root.classList.add('dark-mode');
//   } else {
//     root.classList.remove('dark-mode');
//   }
// }, [isDarkMode]);

// const toggleMode = () => {
//   setIsDarkMode(!isDarkMode);
// };




  return (

    <>
    <div className={color ? "header1 header1-bg" : "header1" }>
    <div className="logo1">
        <img className='log'  src={logo} alt="logo" />
    </div>
    
    {/* <div className={color ? "header header-bg" : "header" }> */}
    <div className='header'>
    
    
        <img className='logo'  src={logo} alt="logo" />
        <div className='nav-menu1'>
            <li>
                <Link to="/"><AiFillHome className='mr-3' style={{color:'#3aaced'}} /></Link>
            </li>
            <li>
                <Link to="/" className='mr-3'>Home</Link>
            </li>
            <li>
                <Link to="/hotel" className='mr-3'><MdLocalHotel className='mr-3' style={{marginRight:'10px'}} />Hotels</Link>
            </li><li>
                <Link to="/flight" className='mr-3' ><MdFlight className='mr-3' style={{marginRight:'10px'}} />Flight</Link>
            </li><li>
                <Link to="/carrent" className='mr-3' ><AiFillCar className='mr-3' style={{marginRight:'10px'}} />Car rentals</Link>
            </li>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/"><span className=''><FaShoppingCart className='relative' size={24}/></span> <span className='absolute -right-3 -top-3 h-4 w-4 opacity-25 font-bold rounded-full items-center text-[10px] flex justify-center text-white bg-black'>3</span></Link>
            </li>
            <li>
                <Link to="/"><AiFillHeart className='relative' size={24} /><span className='absolute left-4 -bottom-2 h-4 w-4 font-bold rounded-full items-center text-[10px] flex opacity-25 justify-center text-white bg-[black]'>3</span> </Link>

            </li>
            <li>
                <Link to="/" ><span>Search</span> <BiSearch /></Link>
            </li>
            <li>
            </li>
            {/* <li onClick={toggleMode}>
            <Link to="" >{isDarkMode ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}</Link>
            </li> */}
        </ul>
        <div className='hambrger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}} />
        ): 
        (
          <FaBars size={20} style={{color:"#fff"}} />
        )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu2"}>
            <li>
                <Link to="/"><FaShoppingCart/></Link>
            </li>
            <li>
                <Link to="/carrent"><AiFillHeart/></Link>
            </li>
            <li>
                <Link to="/fight" ><span style={{color:'white', fontSize:'16px'}}>Search</span> <BiSearch style={{marginLeft:'20px'}} /></Link>
            </li>
            <li>
            </li>
            {/* <li onClick={toggleMode}>
            <Link to="" >{isDarkMode ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}</Link>
            </li> */}
        </ul>
    </div>
    </div>

    </>
  )
}

export default Navbar