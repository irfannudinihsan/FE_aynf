import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdLogin, MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

var countries = [
    "Kamboja",
    "Laos",
    "Malaysia",
    "Filipina",
    "Thailand",
    "Singapura",
    "Vietnam",
    "Myanmar",
    "Indonesia",
    "Brunei Darussalam",
];

const Logout = () => {
    localStorage.clear();
    location.href='/';
}

const Navbar = ({id}) => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get(`https://ayfnfebe29.up.railway.app/country`)
        .then(res => {
            setCountries(res.data)
        });
    }, []);

    return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand ps-5">
                <Link to={"/"}>
                    <img src={logo} alt="" width="70" height="40"/>
                </Link>
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto ps-5">
                    <li className="nav-item">
                        <Link to={"/trending"} style={{color: 'white', marginRight:"2rem"}} className="nav-link active" aria-current="page">Trending</Link>
                    </li>
        
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white', marginRight:"2rem"}}>Category
                        {/* <Link to={"/category"} style={{color: 'white'}} >Category</Link> */}
                        </a>
                
                    <ul className="dropdown-menu">
                        <li><Link to={`category/${1}` }><a className="dropdown-item">Economy</a></Link></li>
                        <li><Link to={`category/${2}`}><a className="dropdown-item">Environment</a></Link></li>
                        <li><Link to={`category/${3}`}><a className="dropdown-item">Health</a></Link></li>
                        <li><Link to={`category/${4}`}><a className="dropdown-item">Politic</a></Link></li>
                        <li><Link to={`category/${5}`}><a className="dropdown-item">Other</a></Link></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white', marginRight:"2rem"}}>Asean
                        {/* <Link to={"/asean"} style={{color: 'white'}} >Asean</Link> */}
                        </a>
                    
                    <ul className="dropdown-menu">
                        {countries.map((item, index) => {
                            return <li><Link to={`country/${item.id}`}><a className="dropdown-item" >{item.name}</a></Link></li>
                        })}
                    </ul>
                    </li>

                    <li className="nav-item">
                        <Link to={"/about"} style={{color: 'white'}} className="nav-link active" aria-current="page">About Us</Link>
                    </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            

            <ul className="nav ps-5 pe-5 justify-content-end">
                {/* <li className="nav-item">
                    <Link to={"/formdata"} style={{color: 'white', padding:"1rem"}} className="nav-link active" >Create Data</Link>
                </li> */}
                          
                <li className="nav-item">
                    {
                    localStorage.getItem('token') 
                    ?
                        <>
                        <button className="btn nav-link text-white" data-bs-toggle="modal" data-bs-target="#logout">
                            Logout <MdLogout size={27} style={{color: 'white', marginRight:"1rem"}}/>
                        </button>
                        
                        <div className="modal fade" id="logout" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="logoutLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="logoutLabel">Konfirmasi Logout</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Apakah kamu yakin untuk logout?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                    <button type="button" className="btn btn-primary" onClick={Logout}>Konfirmasi</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        </> 
                    :
                        <>
                            <Link to={"/login"} style={{color: 'white'}} className="nav-link active">Login
                                <MdLogin size={27} style={{color: 'white', marginRight:"1rem"}}/>
                            </Link>
                        </>
                    }
                </li>         
            </ul>
        </div>
        </div>           
       </nav>
</>
    )
  }
  
  export default Navbar