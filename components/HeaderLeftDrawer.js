import React from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';
import {Ionicons} from '@expo/vector-icons'

const DrawerMenu=props=>{
    return <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
            title="menu"
            iconName="ios-menu"
            onPress={()=>{
              props.navigationData.toggleDrawer();
            }}
            style={{color:"white"}}/>
      </HeaderButtons>
  }

  export default DrawerMenu;