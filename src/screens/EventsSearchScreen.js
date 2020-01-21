// import React, { useState } from "react";
// import { Text, View, StyleSheet, Linking, Button } from 'react-native';
// import EventsResultsScreen from "./EventsResultsScreen";
// import axios from "axios";
// import * as Permissions from "expo-permissions";
// import { Constants } from 'expo';
// import { hotspotsUsers } from "../api/hotspotsUsersConfig";
// import * as firebase from "firebase";

// // firebase.auth().onAuthStateChanged((user) => {
// //   if (user) {
// //     console.log('user logged')
// //   }
// // });
// test= () => {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       return 2;
//       // User is signed in.
//     } else {
//       return 1;
//       // No user is signed in.
//     }
//   });
// }

// export default class EventsSearchScreen extends React.Component {


//   componentDidMount(){
//   //   geolocation.requestAuthorization();
//     tester = test();
//   }

//   render() {
//     return this.tester < 2 ?
      
//       <View>
//       <Text>hey its the event page</Text>
//       </View>


//     :

//     <View>
//       <Text>not signed in</Text>
//       </View>
//   }


// }


// return this.state.foodList.length > 0 ?








import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import EventsResultsScreen from "./EventsResultsScreen";

const EventsSearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [params, setParams] = useState({});

  const buildParams = () => {
    if (searchTerm) setParams((params.keyword = searchTerm));
    if (city) setParams((params.city = city));
    if (date) setParams((params.date = date));
    console.log(params);

  navigation
  };

  return (
    <View>
      <Text>Search For Upcoming Events</Text>
      <View style={styles.entryStyle}>
        <Text style={styles.labelStyle}>*Event: </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Select Event"
          autoCorrect={false}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <View style={styles.entryStyle}>
        <Text style={styles.labelStyle}>City: </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Select City"
          autoCorrect={false}
          value={city}
          onChangeText={setCity}
        />
      </View>
      <View style={styles.entryStyle}>
        <Text style={styles.labelStyle}>Date: </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Select Date"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />
      </View>
      <Button title="Search" onPress={() => buildParams()} />
    </View>
  );
};

const styles = StyleSheet.create({
  entryStyle: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 5
  },
  labelStyle: {
    alignSelf: "center",
    width: 50,
    fontWeight: "bold"
  },
  inputStyle: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#F0EEEE"
  }
});

export default EventsSearchScreen;
