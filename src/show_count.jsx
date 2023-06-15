import React,{useState} from "react";

const Task1=()=>{

    const [appear,hide] = useState(true);
    const [para,update] = useState("");
    const [ count,increament ]= useState(0)
   const Show = ()=>{
    if(appear){
        hide(false);
        update(<p className="content"   >React was created by Jordan Walke, a software engineer at Meta,
            <br></br>
             who released an early prototype of React. He was influenced by XHP, 
             <br></br>
             an HTML component library for PHP. It was first deployed on Facebook's
             <br></br>
              News Feed in 2011 and later on Instagram in 2012.</p>);
        increament(count+1);
    }else{
        hide(true);
        update("");
        increament(count+1);
    }
       
   } 
   return(
    <>
       <button className="button" onClick={Show}>Show</button>
        <p>{para}</p>
        <p>{count}</p>
    </>
   )
}
export default Task1;

