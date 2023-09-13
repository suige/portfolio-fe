import type { Meta, StoryObj } from '@storybook/react';

import { Chatbot } from './index';

const meta = {
  title: 'Components/Chatbot',
  component: Chatbot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Chatbot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initMessages: [
      { id: '1', message: 'Hello! This is Kaori :)', trigger: '2' },
    ],
    steps: {
      '1': { id: '1', message: 'Hello! This is Kaori :)', trigger: '2' },
      '2': { id: '2', message: 'What can I help you?', trigger: '3' },

      '3': {
        id: '3',
        options: [
          {
            label: 'Just Saying Hello!',
            trigger: '4',
          },
          {
            label: 'We would like to hire you!',
            trigger: '5',
          },
          {
            label: 'Who are you...?',
            trigger: '6',
          },
        ],
      },

      '4': {
        id: '4',
        message: 'Hello! Thanks for coming my portfolio :)',
        trigger: '3',
      },

      '5': {
        id: '5',
        message:
          'I am glad to hear that! I would like to contact you. Can I have your e-mail?',
        trigger: 'xxx',
      },

      '6': {
        id: '6',
        message:
          'I am a Software Engineer, mainly Frontend web. What kind of information do you want about me?',
        trigger: 'yyy',
      },
    },
  },
};
