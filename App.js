import React from 'react';
import { StyleSheet, Flatlist, Text, View } from 'react-native';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      countries: []
    }
  }
componentDidMount () {
  const url = 'http://restcountries.eu/rest/v2/all';
  // console.log(url);

  fetch(url)
  .then(res => res.json())
  .then(json => {

    this.setState ({
      countries: json
    });
  });
}

  render () {
    const {
      countries
    } = this.state

    console.log('App/countries', countries)

    return (
      <View>
        {/* <Flatlist /> */}
        {countries.map((countrie => {
          return (
            <View style={{padding: 50}}>
              <Text> {countrie.name}</Text>
              <Text>{countrie.capital}</Text>
            </View>
            )
        }))} 
        <Text style={{fontSize: 40, paddingTop: 100, textAlign: 'center', color: 'red'}}>Hello Ali !</Text>
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
