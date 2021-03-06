import React from 'react';
import ImageBlock from './index';

export default {
    title: 'Atoms/Image Block',
    component: ImageBlock
};

const Template = (args) => <ImageBlock {...args} />;

const args = {
    type: 'ImageBlock',
    url: '/images/fisherman.jpg',
    altText: 'Image alt text',
    caption: 'Image caption'
};

export const Primary = Template.bind({});
Primary.storyName = 'Image';
Primary.args = { ...args };
