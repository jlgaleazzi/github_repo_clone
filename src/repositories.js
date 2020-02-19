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
                    placeholder="   Find a repository"/>
                </div>
                <div className='repo-button'> 
                    <select name='type' id='type-select'>
                        <option >Type: All</option>
                    </select>
                </div>
                <div className='repo-button'>
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
                        flex-basis:400px;
                        padding-top:20px;
                        padding-left:10px;
                        padding-right:20px;
                    }
                    .search-input input {
                        font-size: 18px;
                        border-radius:10px;
                        border-color:#1f2029;
                        width:100%;
                        height:40px;
                        color:#FFF;
                        background-color:#1f2029;
                    }
                    .repo-button {
                        padding-left:20px;
                        padding-top:24px;
                    }
                    .main-container {
                        right:0px;
                        padding-left:20px;
                        padding-right:20px;
                       
                    }
                    .main-container select
                    {
                        display: block;
                        font-size: 16px;
                        font-weight: 700;
                        color: #FFF;
                        padding: 0.3em 1.4em .5em .8em;
                        width: 100%;
                        max-width: 100%; 
                        box-sizing: border-box;
                        margin: 0;
                        border: 1px solid #aaa;
                        box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
                        border-radius: .5em;
                        -moz-appearance: none;
                        -webkit-appearance: none;
                        appearance: none;
                        background-color: #1f2029;
                    }
                    `}
                </style>
        </div>
    )
}

export default Repositories;