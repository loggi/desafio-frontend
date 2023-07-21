import React, { Component } from 'react';
//import Copyright from "../Copyright";
import Header from '../Header';
import Footer from '../Footer';
import Copyright from '../../Copyright';

export class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div className='layout'>
                <Header />
                {children}
                <Footer />
                <Copyright />
            </div>
        );
    }
}