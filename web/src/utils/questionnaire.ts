import { QuestionnaireItemAnswerOptionValue } from 'shared/src/contrib/aidbox';

export function getDisplay(value: QuestionnaireItemAnswerOptionValue): string | number {
    if (value.Coding) {
        return value.Coding.display ?? '';
    }

    if (value.string) {
        return value.string;
    }

    if (value.string) {
        return value.string;
    }

    if (value.integer) {
        return value.integer;
    }

    console.warn(`There is not implementation for getDisplay of ${JSON.stringify(value)}`);

    return '';
}