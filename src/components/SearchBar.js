import React from 'react'
import Loader from "./Loader"


const SearchBar = (props) => {
  const { visible, toggleSearchBar, setSearchTerm, locations = [], locLoading, setLocationId } = props;
  return (
    <div className={`search--container ${visible ? 'visible' : ''}`}>
      <div className="search__close-btn" onClick={() => toggleSearchBar(false)}>
        <span class="material-icons">
          close
      </span>
      </div>
      <div className="search-form">
        <div className="search-form__input">
          <span className="material-icons">
            search
          </span>
          <input type="text" placeholder="Search Location" onChange={(e) => { setSearchTerm(e.target.value) }} />
        </div>
        {/* <div className="search-form__button">
          <button>Search</button>
        </div> */}
      </div>
      {locLoading ?
        <div className="loader--container" style={{ height: 'calc(100% - 100px)' }}>
          <Loader />
        </div> :
        <div className="country-list">
          {locations.map((location, index) => {
            return (
              <div key={index} className="country-list__item" onClick={() => {
                toggleSearchBar(false)
                setLocationId(location.woeid)
              }
              }>
                <h3>{location.title}</h3>
                <span className="material-icons">
                  arrow_forward_ios
                </span>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default SearchBar
