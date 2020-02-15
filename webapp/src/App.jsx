import React, {Component, lazy, Suspense} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import {withStyles} from '@material-ui/core/styles'
import {ToastContainer} from 'react-toastify'

const LandingPage = lazy( () => import('./views/LandingPage/LandingPage'));

const styles = () => ({
    root: {
        flexGrow: 1
    }
});

class App extends Component {
    state = {
        anchor: 'left'
    };

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Suspense
                    fallback={
                        <div
                            style={{
                                textAlign: 'center',
                                height: '361.88px',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            Loading...
                        </div>
                    }
                >
                    <Switch>
                        <Route exact path="/" component={withRouter(LandingPage)}/>
                    </Switch>
                </Suspense>
                <ToastContainer/>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = () => {
    return {}
};

export default withStyles(styles, {withTheme: true})(withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App)))
