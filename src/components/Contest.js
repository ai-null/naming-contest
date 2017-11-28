import React ,{ Component } from 'react';
import PropTypes from 'prop-types';


export default class Contest extends Component {
    render() {
        return(
            <div className="contest container">
                Current id : { this.props.id }
            </div>
        )
    }
}

Contest.propTypes = {
    id: PropTypes.number.isRequired
}