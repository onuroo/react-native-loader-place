import React, { Component } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

export default class Rectangle extends Component{

    static propTypes = {
        height : PropTypes.number,
        width : PropTypes.number,
        duration: PropTypes.number,
        backgroundColor: PropTypes.string,
        animationColor: PropTypes.string,
        style: PropTypes.object,
        loaded: PropTypes.bool
    }

    static defaultProps = {
        height : 15,
        width : 70,
        duration: 900,
        backgroundColor: 'blue',
        animationColor: 'blue',
        style: { justifyContent:'center', alignItems:'center' },
        loaded: true
    }

    constructor (props) {
        super(props)
        this.state = {
            left: new Animated.Value(0),
            animationArray: []
        }
    }

    componentDidMount () {
        this.createAnimationView()
    }
    
    componentWillReceiveProps( nextProps ){
        if(!nextProps.loaded){
            this.animate()
        }
    }

    animate () {
        const { width, duration } = this.props
        Animated.timing(
            this.state.left,
            {
                toValue: width,
                duration: duration
            }
        ).start((event) => {
            if(event.finished){
                this.state.left.setValue( -width )
                this.animate()
            }
        })
    }

    createAnimationView(){
        const arr = []
        const limit = this.props.width - 10
        for (let i = 0; i < limit; i++) {
            if(i > limit/2){
                arr.push(limit-i)
            }else if(i < limit/2){
                arr.push(i)
            }else if(i == limit/2){
                for(let k = 0; k < 20; k++ ){ arr.push(i) } 
            }
        }
        this.setState({ animationArray: arr })
        this.animate()
    }

    renderContent(){
        return(
            this.props.children
        )
    }

    renderAnimation( height, width, backgroundColor, animationColor ){
        const animation = this.state.animationArray.map((a, i) => {
            return(
                <View key={i} style={{opacity:  a * 0.011  , height: height, width: 1, backgroundColor: animationColor }} />
            )
        })
        return(
            <View style={[{height:height,width:width},styles.inclusiveView]}>
                <View style={[{height:height,width:width,backgroundColor:backgroundColor},styles.backgroundView]}></View>
                <Animated.View style={[{left:this.state.left},styles.animationView]}>
                    {animation}
                </Animated.View>
            </View>
        )
    }

    render () {
        const { height, width, backgroundColor, animationColor, style, loaded } = this.props
    
        return (
        <View style={style}>
            {loaded ? 
                this.renderContent()
            : 
                this.renderAnimation( height, width, backgroundColor, animationColor )
            }
        </View>
        )
    }
}


const styles = StyleSheet.create({
    backgroundView:{
        borderRadius:4,
        opacity:0.15,
        position:'absolute',
        left:0,
        top:0
    },
    inclusiveView:{
        overflow:'hidden',
        flexDirection:'row',
        borderRadius:4
    },
    animationView:{
        position:'absolute',
        top:0,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }

});
