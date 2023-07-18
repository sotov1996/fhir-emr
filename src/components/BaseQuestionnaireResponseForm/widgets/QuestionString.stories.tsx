import { Meta, StoryObj } from '@storybook/react';
import { ItemContext } from 'sdc-qrf/lib/types';

import { WithQuestionFormProviderDecorator, withColorSchemeDecorator } from 'src/storybook/decorators';

import { QuestionString } from './index';

const meta: Meta<typeof QuestionString> = {
    title: 'widget/QuestionString',
    component: QuestionString,
    decorators: [withColorSchemeDecorator, WithQuestionFormProviderDecorator],
};

export default meta;
type Story = StoryObj<typeof QuestionString>;

export const Example: Story = {
    render: () => (
        <QuestionString
            parentPath={[]}
            questionItem={{
                text: 'First name',
                type: 'string',
                linkId: 'first-name',
                required: true,
            }}
            context={{} as ItemContext}
        />
    ),
};
