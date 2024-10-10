import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

export const App = () => {
    type ItemProps = {title:string}

    const Item = ({title}: ItemProps) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );
    
    return (
        <View>
            <Text>Reiner</Text>
            <FlatList
                horizontal
                data={dates}
                renderItem={({item}) => <Item title={item.date}/>}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 12,
    },
  });

const dates = [
    {
        id: 1,
        date: '2022-09-01 18:00:00.000'
    },
    {
        id: 2,
        date: '2022-09-02 18:00:00.000'
    },
    {
        id: 3,
        date: '2022-09-03 18:00:00.000'
    },
    {
        id: 4,
        date: '2022-09-04 18:00:00.000'
    },
    {
        id: 5,
        date: '2022-09-05 18:00:00.000'
    },
    {
        id: 6,
        date: '2022-09-06 18:00:00.000'
    },
    {
        id: 7,
        date: '2022-09-07 18:00:00.000'
    },
]

export default App