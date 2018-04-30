import  { StyleSheet } from 'react-native'

export const constants = {
    actionColor: '#ff00ff'
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
    },

    listview: {
        flex: 1,
    },

    li: {
        backgroundColor: '#000000',
        borderBottomColor: '#000000',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },

    liContainer: {
        flex: 2,
    },

    liText: {
        color: '#ffffff',
        fontSize: 16,
    },

    navbar: {
        alignItems: 'center',
        backgroundColor: '#ee82ee',
        borderBottomColor: '#ee82ee',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        padding: 15,
        height: 70,
        flexDirection: 'row'
    },

    navbarTitle: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Georgia',
        textAlign: 'center'
    },

    center: {
        textAlign: 'center',
    },

    actionText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Georgia',
        textAlign: 'center',
    },

    action: {
        backgroundColor: constants.actionColor,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
})

module.exports = { styles, constants }
