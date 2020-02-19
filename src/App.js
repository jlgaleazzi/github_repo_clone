import React ,{useEffect, useState} from "react";
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
        <div className='main-cont'>{pageToShow(pageName)}</div>
        
        <style jsx global> 
        {`
        body {
            background-color:#15161b;
            color:#fff;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        }
        `}
        </style>
        <style jsx>
            {`
            .main-cont {
                margin:auto;
                width:80%;
                top:0;
                left:0;
                right:0;
            }
            `}
        </style>
    </reposContext.Provider>
 
        )  
};

export default App;