import React from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';
import {Ionicons} from '@expo/vector-icons'

const HeaderButtonLeftRight=props=>{
    return <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
            title={props.title}
            iconName={props.iconName}
            onPress={()=>{
              props.buttonTypes=="left"?
              props.navigationData.toggleDrawer(): props.buttonTypes=="Right"?
              console.log(props):props.navigationData.getParam('save')();
              }}
            
            style={{color:"white"}}/>
      </HeaderButtons>
  }

  export default HeaderButtonLeftRight;