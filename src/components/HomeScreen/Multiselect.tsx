// import component
import React, {Component} from 'react';
import {View} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import COLORS from '../../styles/COLORS';

const items = [
  {
    id: 'Playful',
    name: 'Playful',
  },
  {
    id: 'Friendly',
    name: 'Friendly',
  },
  {
    id: 'Devoted',
    name: 'Devoted',
  },
  {
    id: 'Loyal',
    name: 'Loyal',
  },
];

class MultiSelectComp extends Component {
  state = {
    selectedItems: this.props.temperament,
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };

  render() {
    const {selectedItems} = this.state;
    console.log(this.props.temperament);
    return (
      <View style={{flex: 1}}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={component => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Temperament"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={text => console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor={COLORS.tabIconDefault}
          tagBorderColor={COLORS.tabIconDefault}
          tagTextColor="#CCC"
          selectedItemTextColor={COLORS.tabIconDefault}
          selectedItemIconColor={COLORS.tabIconDefault}
          itemTextColor={COLORS.tabIconDefault}
          displayKey="name"
          searchInputStyle={{color: COLORS.tabIconDefault}}
          submitButtonColor={COLORS.tabIconDefault}
          submitButtonText="Add"
        />
      </View>
    );
  }
}

export default MultiSelectComp;
