import React from "react";
import { View, Text } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import PropTypes from "prop-types";
import style from "./style";


const UserStory = props => {
    return (
        <View style={style.storyContainer}>
            <UserProfileImage
                profileImage={props.profileImage}
                imageDimensions={65}
            />
            <Text style={style.firstName}>{props.firstName}</Text>
        </View>
    );
};

UserStory.prototype = {
    firstName: PropTypes.string.isRequired,
};

export default UserStory;