"use client"
import SearchIcon from '@mui/icons-material/Search';
import { SearchBoxBorderContainer, SearchBoxContentContainer, SearchBoxInput, SearchBoxRoundedBtn } from './classNames';

const SearchBox = () => {
    return (
        <div className={SearchBoxBorderContainer}>
            <div className={SearchBoxContentContainer}>
                <input
                    type='text'
                    placeholder='Find real estate'
                    className={SearchBoxInput}
                />
                <button className={SearchBoxRoundedBtn}>
                    <SearchIcon sx={{ fontSize: 35 }}/>
                </button>
            </div>
        </div>
    )
}


export default SearchBox