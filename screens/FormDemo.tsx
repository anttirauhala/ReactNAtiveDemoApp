import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import mainStyles from '../styles';

interface ShoppingListItem {
  id: string;
  name: string;
}

interface propsType {}

interface IState {
  userText: string;
  items: ShoppingListItem[];
}

export default class StylingDemo extends React.Component<propsType, IState> {
  constructor(props: propsType) {
    super(props);

    this.state = {
      items: [],
      userText: '',
    };
  }

  onAdd = () => {
    if (this.state.userText.length < 1) {
      return;
    }
    let items = this.state.items;
    items.push({id: Date.now().toString(), name: this.state.userText});
    this.setState({items, userText: ''});
  };

  onRemove = (id: string) => {
    let items = this.state.items;
    items = items.filter((i) => i.id !== id);
    this.setState({items});
  };

  render() {
    return (
      <View style={[mainStyles.container, mainStyles.defaultBackground]}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Shopping List</Text>
          </View>
          <TextInput
            style={styles.inputField}
            onChangeText={(txt) => this.setState({userText: txt})}
            value={this.state.userText}
          />
          <TouchableOpacity style={styles.button1} onPress={() => this.onAdd()}>
            <Text>Add item</Text>
          </TouchableOpacity>
          <FlatList<ShoppingListItem>
            contentContainerStyle={styles.flatListContainer}
            data={this.state.items}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => this.onRemove(item.id)}>
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
            // ListHeaderComponent={
            //   <Text style={styles.listHeader}>Added items:</Text>
            // }
            ListFooterComponent={
              this.state.items.length ? (
                <View style={styles.flatListInfoTextContainer}>
                  <Text>Total items:{this.state.items.length}</Text>
                </View>
              ) : null
            }
            ListEmptyComponent={
              <View style={styles.flatListInfoTextContainer}>
                <Text> [ nothing to buy ] </Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  inputField: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  button1: {
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33B5FF',
    borderWidth: 1,
    borderColor: '#335BFF',
    borderRadius: 5,
  },
  flatListContainer: {
    paddingBottom: 20,
    borderWidth: 1,
    flexGrow: 1,
  },
  flatListInfoTextContainer: {
    padding: 5,
  },
  listHeader: {
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    // borderColor: '#335BFF',
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },
  removeButton: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#FC5466',
    borderRadius: 5,
    padding: 5,
  },
});
