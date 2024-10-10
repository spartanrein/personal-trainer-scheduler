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
    interface DateItem {
        date: Date;
      }
      
      type ItemProps = {
        title: Date;
      };
      
      const Item = ({ title }: ItemProps) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title.toLocaleDateString("en-HK", {day:'numeric'})}</Text>
        </View>
      );
      
      const convertedDates: DateItem[] = dates.map((item) => ({
        date: new Date(item.dateString), // Convert strings to Date objects
      }));
      
      return (
        <View>
          <FlatList
            horizontal
            data={convertedDates}
            renderItem={({ item }) => <Item title={item.date} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
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
        dateString: '2022-09-01 18:00:00.000'
    },
    {
        id: 2,
        dateString: '2022-09-02 18:00:00.000'
    },
    {
        id: 3,
        dateString: '2022-09-03 18:00:00.000'
    },
    {
        id: 4,
        dateString: '2022-09-04 18:00:00.000'
    },
    {
        id: 5,
        dateString: '2022-09-05 18:00:00.000'
    },
    {
        id: 6,
        dateString: '2022-09-06 18:00:00.000'
    },
    {
        id: 7,
        dateString: '2022-09-07 18:00:00.000'
    },
]

export default App