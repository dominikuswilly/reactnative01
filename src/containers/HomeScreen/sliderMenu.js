import React, {Component} from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';



class SliderMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                'https://source.unsplash.com/1024x768/?nature',
                'https://source.unsplash.com/1024x768/?water',
                'https://source.unsplash.com/1024x768/?girl',
                'https://source.unsplash.com/1024x768/?tree'
            ]
        };
    }
   

    render() {
        return (
            <View>
                <SliderBox images={this.state.images} />
            </View>
        );
    }
}

export default SliderMenu;