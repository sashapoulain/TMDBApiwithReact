export default function Breadcrumb() {
   return (
      <>
         <div className="container mt-5 mb-5">
            <div className="row">
               <div className="col-12">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                           <a href="index.html">Anasayfa</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                           Hepsi
                        </li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>

      </>
   )
}