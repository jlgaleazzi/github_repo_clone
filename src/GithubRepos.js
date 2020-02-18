
const GetTopRepos = (repos,num=8) => {
    function compare(a,b) {
        const vala = a.stargazers_count;
        const valb = b.stargazers_count;
      
        let comp = 0;
        if (vala > valb) {
            return -1;
        } else if  
            (vala < valb) {
            return 1;
            }
         return comp;
    }
   

    repos.sort(compare);
    return repos;
}

const FilterReposByName = (repos,query) => {
    if (query ==="") return repos;
  return repos.filter(function(el) {
      const name = el.name.toLowerCase();
      return name.indexOf(query.toLowerCase()) !== -1
  })

}

export {GetTopRepos, FilterReposByName};