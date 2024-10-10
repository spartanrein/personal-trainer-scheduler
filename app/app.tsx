import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


type ItemData = {
  id: string;
  title: string; // Assuming the title holds a date string
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => {
  const formattedDate = new Date(item.title).toLocaleDateString('en-HK', { day: 'numeric' }); // Extract and format the day

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{formattedDate}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [selectedId, setSelectedId] = useState<string>(DATA[0].id);
  const [selectedDate, setSelectedDate] = useState<string | null>();

  // Find the initial selected item based on selectedId
  const initialSelectedItem = DATA.find((item) => item.id === selectedId);

  // Set the initial selectedDate if an item is found
  React.useEffect(() => {
    if (initialSelectedItem) {
      setSelectedDate(new Date(initialSelectedItem.title).toLocaleDateString('en-HK', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }));
    }
  }, [initialSelectedItem]); // Run only when initialSelectedItem changes

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#FFFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setSelectedDate(new Date(item.title).toLocaleDateString('en-HK'));
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.selectedDate}>{selectedDate || 'No date selected'}</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  selectedDate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const DATA: ItemData[] = [
    {
        id: "1",
        title: '2022-10-01 18:00:00.000',
    },
    {
        id: "2",
        title: '2022-10-02 18:00:00.000',
    },
    {
        id: "3",
        title: '2022-10-03 18:00:00.000',
    },
    {
        id: "4",
        title: '2022-10-04 18:00:00.000',
    },
    {
        id: "5",
        title: '2022-10-05 18:00:00.000',
    },
    {
        id: "6",
        title: '2022-10-06 18:00:00.000',
    },
    {
        id: "7",
        title: '2022-10-07 18:00:00.000',
    },
    {
        id: "8",
        title: '2022-10-08 18:00:00.000',
    },
    {
        id: "9",
        title: '2022-10-10 18:00:00.000',
    },
    {
        id: "10",
        title: '2022-10-10 18:00:00.000',
    },
    {
        id: "11",
        title: '2022-10-11 18:00:00.000',
    },
    {
        id: "12",
        title: '2022-10-12 18:00:00.000',
    },
    {
        id: "13",
        title: '2022-10-13 18:00:00.000',
    },
    {
        id: "14",
        title: '2022-10-14 18:00:00.000',
    },
];

export default App;