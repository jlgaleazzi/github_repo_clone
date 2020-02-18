import React ,{useEffect, useState, Component} from "react"
import Overview from "./overview"
import Repositories from './repositories' 
import Menu from '../components/menu'
import axios from 'axios';
export const reposContext = React.createContext();

const pageToShow = pageName => {
    if (pageName === "Overview") return <Overview/>
    if (pageName === "Repositories") return <Repositories />
    return <div>Not Found</div>
};

const App = ({pageName}) => {
const [gitHubData,setGitHubData] = useState([]);
   
useEffect(() => {
    console.log('fetchData useFFect()')
    const fetchData = async () => {
        const result = await axios('http://localhost:4000/repos/',);
        setGitHubData(result.data);
    };
    fetchData();
    },[])

    
return (
  
    <reposContext.Provider value={gitHubData} >
        <Menu/>
        <div>{pageToShow(pageName)}</div>
        <style jsx global> 
        {`
        body {
            background-color:#222;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        }
        `}
        </style>
    </reposContext.Provider>
        )  
};

export default App;