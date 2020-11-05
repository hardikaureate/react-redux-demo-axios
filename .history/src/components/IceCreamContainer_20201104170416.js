import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateTOProps = state => {
    return{
        numOfIceCreams: state.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateTOProps, mapDispatchToProps)(IceCreamContainer)
