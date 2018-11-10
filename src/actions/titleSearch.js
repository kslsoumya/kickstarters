

export function SearchTitle (title , dataList) {
   const results = dataList.filter((project) =>{
       if (project.title.toLowerCase().indexOf(title)!==-1)
       return project;
       
   })
   
    // console.log(request);
    return {
        type : 'TITLE_FILTER',
        payload : results
    }
    

}