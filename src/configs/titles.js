import React from 'react';
import { Helmet } from 'react-helmet';

class PageTitles extends React.Component {
    render (){
        
        //Page Title content 
        const PageTitles = {
            home: 'Home | One KM',
            profile: 'Profile | One KM',
            login: 'Login | One KM',
            apps: 'All Apps | One KM',
        };

        //Current Path 
        const currentRoute = window.location.pathname.split('/')[1];
        const CurrentpageTitle = PageTitles[currentRoute];

        return (
            <div>
                <Helmet>
                    <title>{CurrentpageTitle}</title>
                </Helmet>
            </div>
        )
    }
}

export default PageTitles;