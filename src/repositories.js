import React, {useState, useEffect} from 'react';
import RepoDetail from '../components/RepoDetail';
import {FilterReposByName} from './GithubRepos';
import {reposContext} from "./App"
import { useContext } from 'react';

const Repositories =() => {
    const context = useContext(reposContext);
    const [filterText, setFilterText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
   
    const handleSearchTermn = event => {
        setFilterText(event.target.value);
    }
    useEffect(() => {
        const results =  FilterReposByName(context, filterText);
        setSearchResults(results);
    }, [context,filterText]);
        const languages = [<option key={0}>Language: All</option>].concat(context.map((lang, i) => {
        if (lang.language !== null) return (
         <option key={i+1}>{lang.language}</option>)
    }));

    return(
        <div className='main-container'>
            <div className='search-bar'>
                <div className='search-input'>
                    <input
                    onChange={handleSearchTermn}
                    placeholder="Find a repository"/>
                </div>
                <div className='type-button'> 
                    <select name='type' id='type-select'>
                        <option >Type: All</option>
                    </select>
                </div>
                <div className='lang-button'>
                    <select name='language'>
                        {languages}
                    </select>
                </div >
            </div>
            <div className='repos-container'>
                {
                searchResults.map(r => (
                    <RepoDetail repo={r}  key={r.id}/> 
                ))}
            </div>
                <style jsx>
                    {`
                    .repos-container {
                        display:flex;
                        flex-direction: column;
                        flex-wrap:no-wrap;
                        padding:20px;
                    }
                    .search-bar {
                       display:flex;
                       flex-wrap:no-wrap;
                       padding: 10px 20px 20px 20px; 
                    }
                    .search-input {
                        flex:1;
                    }
                    .search-input input {
                        width:100%;
                    }
                    .main-container {
                        right:0px;
                        padding-left:20px;
                        padding-right:20px;
                    }
                    `}
                </style>
        </div>
    )
}

export default Repositories;