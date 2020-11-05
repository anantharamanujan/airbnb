import React from 'react'
import './SearchDate.css'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// DATE PICKER COMPONENT
function SearchDate() {
    const history = useHistory();
    const [startDate, setStartDate] = React.useState(new Date())
    const [endDate, setEndDate] = React.useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

      function handleSelect(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
      }
    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>Number of Guests <PeopleIcon /></h2>
            <input min={0} defaultValue={2} type="number"/>
            <Button onClick={()=> history.push('/search')}>Search Airbnb</Button>
             {/* <Link to="/search"> <Button>Search Airbnb</Button> </Link> */}
        </div>
    )
}

export default SearchDate
