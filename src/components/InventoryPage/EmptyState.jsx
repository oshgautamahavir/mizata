import { useState, useEffect } from "react";

import PropTypes from 'prop-types'

import './css/EmptyState.css'

import Icon from "./icons/Icon";

const EmptyState = ({ searchKey }) => {
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (searchKey) {
            setErrorMessage(`Cannot find item '${searchKey}'`)
        } else {
            setErrorMessage('There are no items. Click \' + New item \'.')
        }
    },[searchKey])

    return (
        <div className="empty-state">
            <div className="text-center">
                <Icon searchKey={searchKey} />
                <h2>No Items Found</h2>
                <p> { errorMessage } </p>
            </div>
        </div>
    );

};

EmptyState.propTypes = {
    searchKey: PropTypes.string
}

export default EmptyState;
