import React from "react"
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native"
import axios from "axios"
import { Card } from "react-native-elements"
export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
            imagepath: "",
            url: `http://localhost:5000/planet?name=${this.props.navigation.getParam("planet_name")}`
        }
    }

    getDetails = () => {
        axios.get(this.state.url).then((response) => {
            this.setDetails(response.data.data)
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }

    setDetails = (planetDetails) => {
        var planet_type = planetDetails.planet_type
        var imagepath = ""
        switch (planet_type) {
            case "Gas Giant":
                imagepath = require("../assets/gas_giant.png")
                break;

            case "Terrestrial":
                imagepath = require("../assets/terrestrial.png")
                break;

            case "Neptune-like":
                imagepath = require("../assets/neptune_like.png")
                break;

            case "Super Earth":
                imagepath = require("../assets/super_earth.png")
                break;

            default:
                imagepath = require("../assets/super_earth.png")
                break;

        }
        this.setState({ details: planetDetails, imagepath: imagepath })
    }

    componentDidMount() {
        this.getDetails()
    }

    render() {
        if (this.state.details) {
            return (
                <View>
                    <Card>
                        <Text>Details</Text>
                    </Card>
                    <View>
                        <Card>
                            <Text>Distance_From_Earth:{this.state.details.distance_from_earth}</Text>
                        </Card>
                        <Card>
                            <Text>Distance_From_Sun:{this.state.details.distance_from_their_sun}</Text>
                        </Card>
                        <Card>
                            <Text>Gravity:{this.state.details.gravity}</Text>
                        </Card>
                        <Card>
                            <Text>orbital_period:{this.state.details.orbital_period}</Text>
                        </Card>
                        <Card>
                            <Text>orbital_speed:{this.state.details.orbital_speed}</Text>
                        </Card>
                        <Card>
                            <Text>planet_mass:{this.state.planet_mass}</Text>
                        </Card>
                        <Card>
                            <Text>planet_radius:{this.state.details.planet_radius}</Text>
                        </Card>
                        <Card>
                            <Text>planet_type:{this.state.details.planet_type}</Text>
                        </Card>
                    </View>

                    <View>
                        <Text>Specifications</Text>
                        <View>
                            {this.state.planetDetails.specifications.map((item, index) => (
                                <View><Text>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                </View>
            )
        } else {
            return (
                <View>

                    <Text>Loding</Text>
                </View>
            )
        }

    }

}