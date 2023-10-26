import React from "react";
import Avatar from "./Avatar";

export default {
    title: 'Design System/Atoms/Avatar',
    componet: Avatar,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        }
    }
}

const Template = (args) => <Avatar { ...args} />

export const small = Template.bind({})
small.args = {
    name: 'User1',
    imageUrl: './Avatar.png',
    size: 'small',
}