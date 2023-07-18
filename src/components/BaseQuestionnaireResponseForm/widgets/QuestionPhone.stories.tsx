import { Meta, StoryObj } from '@storybook/react';
import { ItemContext } from 'sdc-qrf/lib/types';

import { WithQuestionFormProviderDecorator, withColorSchemeDecorator } from 'src/storybook/decorators';

import { QuestionPhone } from './index';

const meta: Meta<typeof QuestionPhone> = {
    title: 'widget/QuestionPhone',
    component: QuestionPhone,
    decorators: [withColorSchemeDecorator, WithQuestionFormProviderDecorator],
};

export default meta;
type Story = StoryObj<typeof QuestionPhone>;

export const Example: Story = {
    render: () => (
        <QuestionPhone
            parentPath={[]}
            questionItem={{
                text: 'Example',
                type: 'string',
                linkId: 'example',
                required: true,
            }}
            context={{} as ItemContext}
        />
    ),
};
