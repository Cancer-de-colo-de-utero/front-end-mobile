import * as React from 'react';
import renderer from 'react-test-renderer';

import { UbuntuText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<UbuntuText>Snapshot test!</UbuntuText>).toJSON();

  expect(tree).toMatchSnapshot();
});
