import * as React from 'react';

import { Text, TextProps } from './Themed';

export function UbuntuText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Ubuntu-R' }]} />;
}
