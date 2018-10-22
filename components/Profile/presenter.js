import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FadeIn from 'react-native-fade-in-image';
import SquarePhoto from '../SquarePhoto';
import Photo from '../Photo';

const { width, height } = Dimensions.get('window');

const Profile = props => (
    <View style={styles.container}>
    <ScrollView refreshControl={<RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} tintColor={'black'} />} >
        <View style={styles.infoContainer}>
            <TouchableOpacity>
                <FadeIn>
                    <Image style={styles.profileImage} source={props.profile.profile_image ? {uri: props.profile.profile_image} : require('../../assets/images/profile-red.png')} defaultSource={require('../../assets/images/profile-red.png')} />
                </FadeIn>
            </TouchableOpacity>
            <View style={styles.infoText}>
                <Text style={styles.name}>{props.profile.name}</Text>
                <Text style={styles.description}>{props.profile.description ? props.profile.description : '아직 소개글이 없습니다.'}</Text>
                {props.profile.is_self ? (
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                ) : (
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <View style={props.profile.following ? styles.btnGrey : styles.btn}>
                            <Text style={styles.btnText}>{props.profile.following ? 'Unfollow' : 'Follow'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                ) }
            </View>
        </View>
        <View style={styles.numbers}>
            <View style={styles.column}>
                <Text style={styles.number}>{props.profile.post_count}</Text>
                <Text style={styles.numberText}>posts</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.number}>{props.profile.follower_count}</Text>
                <Text style={styles.numberText}>followers</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.number}>{props.profile.following_count}</Text>
                <Text style={styles.numberText}>followings</Text>
            </View>
        </View>
        <View style={styles.modeBar}>
            <TouchableOpacity onPressOut={props.changeToUpload}>
                <View>
                    <Ionicons name={'ios-albums-outline'} size={30} color={props.mode === 'upload' ? '#d5426a' : 'black'} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={props.changeToUploadGrid}>
                <View>
                    <Ionicons name={'ios-albums'} size={30} color={props.mode === 'upload_grid' ? '#d5426a' : 'black'} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={props.changeToInterest}>
                <View>
                    <Ionicons name={'ios-book-outline'} size={30} color={props.mode === 'interest' ? '#d5426a' : 'black'} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={props.changeToInterestGrid}>
                <View>
                    <Ionicons name={'ios-book'} size={30} color={props.mode === 'interest_grid' ? '#d5426a' : 'black'} />
                </View>
            </TouchableOpacity>
        </View>
        {props.mode === 'upload' && (
            <View style={styles.squaerContainer}>
                {props.profile.images ? props.profile.images.map(photo => <SquarePhoto key={photo.id} imageURL={photo.image} />) : <Text style={styles.notFound}>업로드한 이미지가 없습니다.</Text>}
            </View>
        )}
        {props.mode === 'upload_grid' && (
            <View style={styles.gridContainer}>
                {props.profile.images ? props.profile.images.map(photo => <Photo key={photo.id} {...photo} />) : <Text style={styles.notFound}>업로드한 이미지가 없습니다.</Text>}
            </View>
        )}
    </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        marginVertical: 15
    },
    titleText: {
        fontWeight: '600',
        fontSize: 25,
        textAlign: 'center',
        color: '#d5426a'
    },
    infoContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 20
    },
    infoText: {
        paddingLeft: 20
    },
    name: {
        fontWeight: '600',
        fontSize: 20
    },
    description: {

    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    numbers: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',
        paddingTop: 10,
        marginHorizontal: 15,
        width: (width-150)/3
    },
    number: {
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'center'
    },
    numberText: {
        textAlign: 'center'
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    btn: {
        backgroundColor: '#d5426a',
        borderRadius: 5,
        width: width/3,
        alignItems: 'center', 
        padding: 10
    },
    btnGrey: {
        backgroundColor: '#c0c1c2',
        borderRadius: 5,
        width: width/3,
        alignItems: 'center',
        padding: 10
    },
    btnText: {
        fontWeight: '600',
        color: 'white'
    },
    modeBar: {
        flexDirection: 'row',
        borderTopColor: '#c0c1c2',
        borderTopWidth: 1,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 60,
        justifyContent: 'space-between',
    },
    squaerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    notFound: {
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        flex: 1
    },
    gridContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

Profile.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        birth_day: PropTypes.string.isRequired,
        birth_month: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        description: PropTypes.string,
        email: PropTypes.string.isRequired,
        follower_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                category: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    is_interested_category: PropTypes.bool.isRequired,
                    interest_count_category: PropTypes.number.isRequired
                }),
                comment_count: PropTypes.number.isRequired,
                like_count: PropTypes.number.isRequired,
                interest_count_image: PropTypes.number.isRequired
            })
        ),
        name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        notification_count: PropTypes.number.isRequired,
        post_count: PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        following: PropTypes.bool.isRequired,
        is_self: PropTypes.bool.isRequired
    }).isRequired,
    changeToUpload: PropTypes.func.isRequired,
    changeToInterest: PropTypes.func.isRequired,
    changeToUploadGrid: PropTypes.func.isRequired,
    changeToInterestGrid: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
}

export default Profile;