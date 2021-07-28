import {categoryType} from "./types";


function PictureCategory({title, pictures}:categoryType) {

    return (
       <section className="category">
           <div className="category__title">
               <h1>{title}</h1>
           </div>
           <div className="category__inner">
               {pictures.map((item:string) => {
                   return <div className="category__img"><img src={item} alt=""/></div>
               })}
           </div>
       </section>
    )
}

export default PictureCategory