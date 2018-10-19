import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail } from 'native-base';
export class acoordion extends Component {

  render() {

    return (
      <View>
        <Collapse style={{ borderBottomWidth: 1, borderTopWidth: 1 }}>
          <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', padding: 2.5, backgroundColor: '#ffffff' }}>
            <View style={{ width: '25%', alignItems: 'center' }}>
              <Thumbnail source={{ uri: 'https://www.biography.com/.image/t_share/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg' }} />
            </View>
            <View style={{ width: '60%' }}>
              <Text>Name : Mohammed Ali Kley</Text>
              <Text>Profession: Boxer</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#ffffff' }}>
            <Collapse style={{ flexDirection: 'row' }}>
              <CollapseHeader>
                <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Phone-512.png' }} />
              </CollapseHeader>
              <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Text>+1 310 346 0018</Text>
              </CollapseBody>
            </Collapse>
            <Collapse style={{ flexDirection: 'row' }}>
              <CollapseHeader>
                <Thumbnail source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/1674-200.png' }} />
              </CollapseHeader>
              <CollapseBody style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Text>sample@sample.ma</Text>
              </CollapseBody>
            </Collapse>
          </CollapseBody>
        </Collapse>
      </View>
    );
  }
}
export default acoordion;