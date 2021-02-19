/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorDialog } from '@zendeskgarden/react-colorpickers';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export default {
  title: 'Components/ColorDialog',
  component: ColorDialog
} as Meta;

export const Uncontrolled: Story = ({
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha,
  placement,
  disabled
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ColorDialog
        labels={labels}
        disabled={disabled}
        placement={placement}
        onChange={action('onChange')}
        defaultColor={DEFAULT_THEME.palette.kale[700]}
      />
    </div>
  );
};

Uncontrolled.args = {
  placement: 'bottom',
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A',
  disabled: false
};

Uncontrolled.argTypes = {
  color: { control: { disable: true } },
  labels: { control: false },
  placement: {
    control: {
      type: 'select',
      options: [
        'auto',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'end',
        'end-top',
        'end-bottom',
        'start',
        'start-top',
        'start-bottom'
      ]
    }
  }
};

Uncontrolled.parameters = {
  docs: {
    description: {
      component: `
The \`ColorDialog\` component reveals a color picker when a user selects the dialog button.
      `
    }
  }
};
