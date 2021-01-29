/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.saturation_circle';

export const StyledSaturationCircle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  border: 2px solid ${props => props.theme.colors.background};
  /* stylelint-disable */
  transform: translate(
    -${props => props.theme.space.base * 2.5}px,
    -${props => props.theme.space.base * 2.5}px
  );
  /* stylelint-enable */
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 ${props => getColor('neutralHue', 800, props.theme, 0.24)};
  width: ${props => props.theme.space.base * 4}px;
  height: ${props => props.theme.space.base * 4}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSaturationCircle.defaultProps = {
  theme: DEFAULT_THEME
};
