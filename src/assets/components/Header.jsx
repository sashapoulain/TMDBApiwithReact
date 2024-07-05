import logo from '../img/logoo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
   return (
      <>
         <nav className="navbar bg-body-tertiary">
            <div className="container">
               <a className="navbar-brand" href="index.html">
                  <img src={logo} alt="" />
               </a>
               <form className="search-container" id="searchForm">
                  <input
                     type="text"
                     className="form-control search-input"
                     id="query"
                     name="query"
                     placeholder="Film ara..."
                  />
                  <button className="search-button" type="submit">
                     <FontAwesomeIcon icon={faSearch} />
                  </button>
               </form>
            </div>
         </nav>

      </>
   )
}