import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { withRouter } from 'react-router'

const navigationComponent = (props) => {
    const dynamicLink = (route,linkText) => {
        return (
            <div className="nav_link_wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
        }

const handleSignOut = () => {
    axios.delete("https://api.devcamp.space/logout", { withCredentials: true}).then(response => {
        if (response.status === 200) {
            props.history.push("/");
            props.handleSuccessfulLogout();
        }
        return response.data;
    }).catch(error => {
        console.log("ERROR... SIGNING OFF", error)
    })
    }
    

        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav_link_wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>

                    <div className="nav_link_wrapper">
                        <NavLink to="/about-me" activeClassName="nav-link-active">
                            About
                    </NavLink>
                    </div>

                    <div className="nav_link_wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                    </NavLink>
                    </div>

                    <div className="nav_link_wrapper">
                        <NavLink to={"/blog"} activeClassName="nav-link-active">
                            Blog
                    </NavLink>
                    </div>


                   {props.loggedInStatus === "LOGGED_IN" ? (dynamicLink("/portfolio-manager", "Portfolio Manager")) : null}
                </div>

                <div className="right-side">
                    David M.


                    {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}><FontAwesomeIcon icon="sign-out-alt"/></a> : null}

              </div>
            </div>
        )
    };


export default withRouter(navigationComponent)
