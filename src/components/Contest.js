import React ,{ Component } from 'react';
import PropTypes from 'prop-types';


export default class Contest extends Component {
    style = {
        marginTop: '2rem',
        color: 'blue'
    }

    render() {
        return(
            <div className="contest container">
                <section className="text-justify">
                    { this.props.description }
                </section>
                <div className="btn btn-default link" 
                     style={this.style}
                      onClick={this.props.backToHomeBtn}>
                    Back to home
                </div>
            </div>
        )
    }
}

Contest.propTypes = {
    description: PropTypes.string.isRequired,
    backToHomeBtn: PropTypes.func.isRequired
}