import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackHeader from '../../components/stack-header';

const TermsOfService = () => {
    return (
        <View>
            <StackHeader
                title={'Terms Of Service'}
                subtitle={'Updated on November 17, 2022'}
            />
        </View>
    );
};

export default TermsOfService;

const styles = StyleSheet.create({});
