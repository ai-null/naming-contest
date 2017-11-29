import React ,{ Component } from 'react';
import PropTypes from 'prop-types';


export default class Contest extends Component {
    render() {
        return(
            <div className="contest container">
                <section className="text-justify">
                    { this.props.description }
                </section>
            </div>
        )
    }
}

Contest.propTypes = {
    description: PropTypes.string.isRequired
}