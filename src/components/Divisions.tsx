import React,{useState} from 'react'
import { useEffect } from 'react'
import ArticlesSkel from './ArticlesSkel'
import ProfileSkel from './ProfileSkel'

function Divisions() {
    const [profile,setProfile] = useState<any>(null)
    const [articles,setArticles] = useState<any>(null)
    useEffect(()=>{
        setTimeout( async ()=>{
            const res :any = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const resa : any = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data:any= await  res.json();
            const dataa : any = await resa.json();
            setProfile(data);
            setArticles(dataa);
        },5000)
    })
    return (
        <div className="divisions">
         <div className="article_cont">
            <h3>Posts</h3>
           {articles && articles.map((article : any)=> (
               <div className ="article" key={article.id}>
                   <h3>{article.id}   {article.title}</h3>
                   <p>{article.body}</p> 
               </div>
           )  )}
           {!articles && [1,2,3,5].map((n)=>
            <ArticlesSkel key={n}/>
           ) }
         </div>
         <div className="profile_contain">
            <h3>Profile</h3>
         {profile && (
             <div>
                 <h3>{profile.name}</h3>
                 <a href={profile.email}>{profile.email}</a>
             </div>
         )}
         {!profile && (
             <ProfileSkel/>
         )}
         </div>
        </div>
    )
}

export default Divisions
