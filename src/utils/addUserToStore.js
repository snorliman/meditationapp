import { usersCollection } from "../utils/firebase";


export const addUserToStore = (data) => {
    usersCollection.doc(data.user.uid).set({
        email: data.user.email,
        name: data.user.name,
        extrasession: [],
        failedsession: [],
        partlydonesession: [],
        planedsession: [],
        sucesssession: [],
        totaltime: 0
    }).then((data) => {
        console.log(data)
    }).catch((e) => {
        console.log(e)
    })
}