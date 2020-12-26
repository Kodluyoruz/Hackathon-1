import * as React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <NavMenu />
                    {this.props.children}
                <Footer/>
            </React.Fragment>
        );
    }
}