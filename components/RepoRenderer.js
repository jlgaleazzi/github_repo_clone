import Octicon, {Star,RepoForked } from '@primer/octicons-react';
const RepoRenderer = (props) => {
        return(
        <div className='repo-content'>
            <div className='repo-name'>
                {props.repo.name}
            </div>
            <div className='repo-description'>
             {props.repo.description}
            </div>
            <div className='repo-footer'>
            {props.repo.language !== null ?  <div><div className='lang-circle'></div>&nbsp;{props.repo.language}</div>: ''}
                <div><Octicon icon={Star}/>&nbsp;{props.repo.stargazers_count}</div>
                <div><Octicon icon={RepoForked}/>&nbsp; {props.repo.forks_count}</div>
            </div>
            <style jsx>
                {`
                .repo-content {
                    display:flex;
                    flex-direction:column;
                    height:100px;
                    margin:5px 5px 10px 10px;
                    flex-basis:400px;
                    background-color: #1f2029;
                    color:#fff;
                    border-radius: 4px;
                    border:1px solid #444; 
                    padding:10px;
                    justify-content:flex-end;
                    
                }
                .repo-content div {
                    margin-top:5px;
                }
                .repo-footer {
                    color: rgba(255, 255, 255, 0.7);
                    display:flex;
                    flex-wrap:nowrap;
                }
                .repo-footer div {
                    padding-right:10px;
                }
                .lang-circle {
                    position: relative;
                    top: 1px;
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color:#f1e05a;
                    box-sizing: border-box;
                }
                .repo-name {
                    color:#fff;
                }
                .repo-description {
                    padding-top:10px;
                    color: rgba(255, 255, 255, 0.7)
                }
                `}
            </style>
        </div>
    )
}
export default RepoRenderer;