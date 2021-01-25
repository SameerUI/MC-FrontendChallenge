import React from 'react';

export default function GitUserList(props) {

    let renderedUsers = props.userData;

    return (
        <div className='col-xs-12  col-sm-12 col-md-12 col-lg-12'>
            <ol>{
                renderedUsers.map((e, idx) =>
                    <li key={idx}>
                        <img src={e.img}/>
                        {e.name}
                    </li>)
            }</ol>
        </div>
    );
}

