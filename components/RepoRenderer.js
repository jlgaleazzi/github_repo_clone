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
                <div><div className='lang-circle'></div>{props.repo.language}</div>
                <div>{props.repo.stargazers_count}</div>
                <div>{props.repo.forks_count}</div>
            </div>
            <style jsx>
                {`
                .repo-content {
                    margin:5px 5px 10px 10px;
                    flex-basis:400px;
                    background-color: #333;
                    color:#fff;
                    border-radius: 4px;
                    border:1px solid #444; 
                    padding:10px;
                }
                .repo-footer {
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

                `}
            </style>
        </div>
    )
}
export default RepoRenderer;