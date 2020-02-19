import Octicon, {Star,RepoForked } from '@primer/octicons-react';
const RepoDetail = (props) => { 
    return (
        <div className='repo-content'>
            <div className="repo-title">
                {props.repo.name}
            </div>
            <div className='repo-description'>
                 {props.repo.description}
            </div>
             {props.repo.fork ? <div>Forked from {props.repo.forks_url}</div> : ''}
             <div className='repos-footer'>
             {props.repo.language !== null ? <div><div className='lang-circle'></div>&nbsp;{props.repo.language}&nbsp;</div>: ''}
                 <div><Octicon icon={Star}/>&nbsp;{props.repo.stargazers_count}&nbsp;</div>
                 <div><Octicon icon={RepoForked}/>&nbsp; {props.repo.forks_count}&nbsp;</div>
                 {props.repo.license !== null ? <div>{props.repo.license.name}</div>: ''}
                 <div>{props.repo.updated_at}</div>
             </div>
             <style jsx>
                {`
                .repo-content {
                    margin:5px 5px 10px 10px;
                    flex-basis:200x;
                    background-color: #1f2029;
                    color:#fff;
                    border-radius: 4px;
                    border:1px solid #444; 
                    padding:10px;
                    line-height:1.7;
                    color:rgba(255, 255, 255, 0.7);
                }
                .repos-footer {
                    display:flex;
                    flex-wrap:nowrap;
                    
                }
                .repo-title{
                    font-weight:900;
                    font-size:1.3em;
                    color:#fff;
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
                `}
            </style>
        </div>
    )
}

export default RepoDetail;