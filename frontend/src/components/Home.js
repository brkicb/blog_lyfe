import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Blog Lyfe!</h1>
            <p className="lead">We make all kinds of awesome blogs related to travel.</p>
            <hr className="my-4" />
            <p>Click the button below to check out our awesome blog.</p>
            <Link className="btn btn-primary btn-lg" to="/blog">Check out our Blog</Link>
        </div>
    </div>
);

export default home;
