import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from '../Styles/Stylesheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderComponent = () => {
    return (
        <Grid>
            <Col style={styles.headerContainer}>
            
                <Row size={10} style={styles.headerTextContainer}>
                <Row >
                <FontAwesome5 name={'long-arrow-alt-left'} size={30}/>
                <Text style={styles.headerText}>BoilerPlate</Text>
                </Row>
                </Row>
            
            </Col>
            
        </Grid>
       
    )
}

export default HeaderComponent

