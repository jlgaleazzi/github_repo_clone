import React, {useState,useContext,useEffect} from "react";
import {reposContext} from "../src/App"
import Link from "next/link";
import {withRouter} from 'next/router';
const Menu = ({router}) => {
        
        const context = useContext(reposContext);
        const [numberOfRepos,setNumberofRepos] = useState(0);
        const [path,setPath] = useState('/')
        useEffect(() => {
            setPath(router.pathname);
            setNumberofRepos(context.length);
        }, [path,context.length]);
            return (
                <div className='menu-container'>
                       <div className={`${path === "/" ? "link-container-on": "link-container" }`}>
                            <Link href="/">
                                <a className='navbar'>Overview</a>
                            </Link> 
                        </div> 
                        <div className={`${path === "/Repositories" ? "link-container-on": "link-container" }`}>
                            <Link href="/Repositories"> 
                            <a className='navBar'>Repositories</a>
                            </Link>
                            <div className='repo-num'>
                                &nbsp;{numberOfRepos}&nbsp;
                            </div>
                        </div>
                    <style jsx>
                        {`
                        .menu-container {
                            padding-left:20px;
                            display:flex;
                            flex-wrap:wrap;
                            border-bottom: solid 1px gray;
                        }
                        .link-container-on{
                            display:flex;
                            flex-wrap:wrap;
                            padding: 20px 20px 20px 20px;
                            background-color:#1f2029;
                            border-bottom: solid #ff420f;
                        }
                        .link-container {
                            display:flex;
                            flex-wrap:wrap;
                            padding: 20px 20px 20px 20px;
                            background-color:#1f2029;
                        }
                        .link-container a {
                            text-decoration: none;
                            font-weight:700;
                            color:#fff;
                        }
                        .link-container-on a {
                            text-decoration: none;
                            font-weight:700;
                            color:#fff;
                        }
                        .repo-num {
                            background-color:black;
                            box-sizing: border-box;
                           
                            border-radius: 50%;
                            margin-left:10px;
                            color:white;
                        }
                        `}
                    </style>
                </div>
            )
        }
    


export default withRouter(Menu);

