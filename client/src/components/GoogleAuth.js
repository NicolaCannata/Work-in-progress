import React from 'react';

class GoogleAuth extends React.Component{
    //Inizialize google library

    state = { isSignedIn: null }

    componentDidMount(){
        window.gapi.load('client:auth2', () => 
        window.gapi.client.init({
            clientId: '379898194573-ooqaatglmjbdpg2a29beopmbhagg55rr.apps.googleusercontent.com',
            scope:'email'            
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
        );
    };

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    renderAuthButton = () => {
        if (this.state.isSignedIn === null){
            return null
        } else if (this.state.isSignedIn){
            return(
                <button 
                    onClick={this.onSignOutClick}
                    className="ui red google button">
                    <i className="google icon" />
                        Log Out
                </button>
            )
        } else { 
           return (
                <button 
                    onClick={this.onSignInClick}
                    className="ui red google button">
                     <i className="google icon" />
                    Sign in with Google
                  </button>)
        }
    }

    render(){
        return(
            <this.renderAuthButton />
        )
    };
};

export default GoogleAuth;