import {GetTopRepos} from './GithubRepos'
import RepoRenderer from '../components/RepoRenderer';
import {reposContext} from "./App"
import { useContext } from 'react';
const Overview = () => {

    const context = useContext(reposContext);
 
    const sorted = GetTopRepos(context);
    const topRepos = sorted.map((repo,i) => 
      <RepoRenderer repo={repo} key={i}/>
    )
    return (
        <div>
            <div>
                Popular repositories
            </div>
            <div className='repos-container'>
                {topRepos}
        </div>
        <style jsx>
            {`
            .repos-container {
                display:flex;
                flex-wrap:wrap;
                padding:20px;
            }
            `}
        </style>
       </div>
    )
}

export default Overview;