import React from 'react';

export default function Search(props) {

    async function filterGitUsersHelper(e) {
        console.log("filteredHelper : ", e.target.value);
        props.doSearch(e.target.value);
    }

    return (
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <span className='searchbox-icon'>
                  <i className='fa fa-search'/>
                </span>
            <input className='fullwidth search' type='text' onChange={e => filterGitUsersHelper(e)}/>
        </div>
    );

}
