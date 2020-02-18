const RepoDetail = (props) => { 
    return (
        <div className='repo-content'>
            <div className="repo-title">
                {props.repo.name}
            </div>
            <div>
                 {props.repo.description}
            </div>
             {props.repo.fork ? <div>Forked from {props.repo.forks_url}</div> : ''}
             <div className='repos-footer'>
                 <div>{props.repo.language}</div>
                 <div>{props.repo.stargazers_count}</div>
                 <div>{props.repo.forks_count}</div>
                 {props.repo.license !== null ? <div>{props.repo.license.name}</div>: ''}
                 <div>{props.repo.updated_at}</div>
             </div>
             <style jsx>
                {`
                .repo-content {
                    
                    margin:5px 5px 10px 10px;
                    flex-basis:200x;
                    background-color: #333;
                    color:#fff;
                    border-radius: 4px;
                    border:1px solid #444; 
                    padding:10px;
                }
                .repos-footer {
                    display:flex;
                    flex-wrap:nowrap;
                    
                }
                `}
            </style>
        </div>
    )
}

export default RepoDetail;