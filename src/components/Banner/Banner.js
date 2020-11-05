import React from 'react'
import './Banner.css'
import SearchDate from '../SearchDate/SearchDate'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = React.useState(false)
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <SearchDate />}
               <Button onClick={() => setShowSearch(!showSearch)} variant="outlined" className="banner_searchButton">
                   {showSearch ? 'Hide' : 'Search Dates'}
                   </Button>
            </div>

            <div className="banner_info">
                <h1>Get out and stretch your Imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button onClick={()=> history.push('/search')} variant="outlined">Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
