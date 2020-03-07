import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet} from 'react-native';

export default class App extends Componet {
    constructor(props){
        super(props);
        //Date chosen 
        this.state = {chosenDate: new Date()};

        //Date set
        this.setDate = this.setDate.bind(this);
    }

    set(newDate){
        this.setState({chosenDate: newDate});
    }

    render() {
        return(
            <View style = {StyleSheet.container}>
                <DatePickerIOS
                date= {this.state.chosenDate}
                onDateChange={this.setDate}
                />
             </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

});