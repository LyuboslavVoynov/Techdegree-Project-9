
//imports
import React from 'react';
import {NoResults} from './Search';

const Links = props => {
    const result = props.result;//photos urls
    let urls;
    //checks if there are any results and displays the photos, displays no result message otherwise
    (result.length > 0)
     ?
     urls = result.map((link, index) =>
        <div key={index}>
            <li>
                <img src={link}  alt="" />
            </li>
        </div>)
     :
     urls = <NoResults />;

    return (
        <ul>
            {urls}
        </ul>
    );
};

export default Links;
