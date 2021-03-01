/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colordialog_preview_container';

export const StyledPreviewContainer = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;
  position: relative;
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPreviewContainer.defaultProps = {
  theme: DEFAULT_THEME
};
