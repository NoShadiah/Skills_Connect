import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css"

import { Users } from "./components/UserRoles/retrieve";
import { RegisterUser} from "./components/users/register";
import { RegisterFOS} from "./components/FOS/register";
// import { RegisterFOS } from "./components/FOS/register";

import { useNavigate } from "react-router-dom";


import "./dstyling.css"
import "./styling.css"
import { Landing } from "./components/landing/landing";
import { SignUp } from "./components/login_signup/signup";



export const Dashboard = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState("landing");
    const logout = ()=>{
        navigate("/login")
    };
    
    
        
        return( 
            
            
            <main>
                <section id="sidebar">
                    <div class="profile">
                        <div class="admin">
                            <img src="https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?size=626&ext=jpg&ga=GA1.2.538938599.1670853663&semt=ais" alt="" srcset=""/>
                        <div class="details">
                            <h3>Promise K</h3>
                            {/* <h5>Super Admin</h5> */}
                        </div>
                        </div> 
                        <span>X</span>
                    </div>
                    <div class="menu-items">
                        <button id="btn" onClick={()=>{setActive("landing")}}>Dashboard</button>

                        <p id="p">All users</p>
                        <div class="dropdown"> 
                            <p className="dropbtn">Users</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register user")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">Fields of study</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register FOS")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div>

                        <p id="p">Connecting</p>
                        <div class="dropdown"> 
                            <p className="dropbtn">Internships</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">Internship matches</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">Applications</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">Testimonials</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div>

                        <p id="p">Interviews</p>
                        <div class="dropdown"> 
                            <p className="dropbtn">Qustion categories</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">Questions</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div>

                        <p id="p">From users</p>
                        <div class="dropdown"> 
                            <p className="dropbtn">Messages</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">FAQs</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">Reviews</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div>

                        <p id="p">Advanced</p>
                        <div class="dropdown"> 
                            <p className="dropbtn">Settings</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">Profile</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div><br></br>
                        <div class="dropdown"> 
                            <p className="dropbtn">User roles</p>
                            <div className="dropdown-content">
                                <button className="btn" onClick={()=>setActive("register users item")}>Register</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>View all</button> 
                                <button className="btn" onClick={()=>setActive("all users")}>Students</button>
                                <button className="btn" onClick={()=>setActive("all users")}>Companies</button>
                                {/* // <button className="btn" onClick={()=>setActive("Search item")}>Search item</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("update users")}>Update</button> <br></br>
                                // <button className="btn" onClick={()=>setActive("delete users item")}>Delete</button>  */}
                            </div>
                        </div>


                        
                        
                    </div>     


                </section>
                <section id="mainpage">
                    <nav id="navbar">
                        <div class="logo">
                            <img src="https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?size=626&ext=jpg&ga=GA1.2.538938599.1670853663&semt=ais" alt="" srcset=""/>
                            <h5 class="menu">Menu</h5>
                        </div>
                        <div class="buttons">
                            <img src="https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?size=626&ext=jpg&ga=GA1.2.538938599.1670853663&semt=ais" alt="" srcset=""/>
                            <div class="button">
                                <button>Site</button>
                                <button onClick={()=>{logout()}}>Logout</button>

                            </div>                
                        </div>
                        
                    </nav>
                <div class="content " id="content_section">
                                
                        

                                {/* for registering  */}
                                {active === "register user" && <RegisterUser/>}
                                {active === "register FOS" && <RegisterFOS/>}
                            
                                {/* for reading */}
                                {active === "landing" && <Landing/>}
                                {active === "all users" && <Users/> }
                                
                        </div>

                    
                
                </section>
            </main>

        );
    

    
}
