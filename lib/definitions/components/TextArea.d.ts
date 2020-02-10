import * as React from "react";
import { ClassValue } from "../util/ClassNames";
import { CaretCoordinates } from "../util/TextAreaCaretPosition";
import { Suggestion } from "../types";
export interface MentionState {
    status: "active" | "inactive" | "loading";
    /**
     * Selection start by the time the mention was activated
     */
    startPosition?: number;
    focusIndex?: number;
    caret?: CaretCoordinates;
    suggestions: Suggestion[];
    /**
     * The character that triggered the mention. Example: @
     */
    triggeredBy?: string;
}
export interface TextAreaState {
    mention: MentionState;
}
export interface TextAreaProps {
    classes?: ClassValue;
    suggestionsDropdownClasses?: ClassValue;
    value: string;
    onChange: (value: string) => void;
    editorRef?: (ref: HTMLTextAreaElement) => void;
    readOnly?: boolean;
    height?: number;
    suggestionTriggerCharacters?: string[];
    loadSuggestions?: (text: string, triggeredBy: string) => Promise<Suggestion[]>;
    textAreaProps?: Partial<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
}
export declare class TextArea extends React.Component<TextAreaProps, TextAreaState> {
    textAreaElement?: HTMLTextAreaElement;
    currentLoadSuggestionsPromise?: Promise<unknown>;
    /**
     * suggestionsPromiseIndex exists as a means to cancel what happens when the suggestions promise finishes loading.
     *
     * When the user is searching for suggestions, there is a promise that, when resolved, causes a re-render.
     * However, in case there is another promise to be resolved after the current one, it does not make sense to re-render
     * only to re-render again after the next one is complete.
     *
     * When there is a promise loading and the user cancels the suggestion, you don't want the status to go back to "active"
     * when the promise resolves.
     *
     * suggestionsPromiseIndex increments every time the mentions query
     */
    suggestionsPromiseIndex: number;
    constructor(props: any);
    handleTextAreaRef: (element: HTMLTextAreaElement) => void;
    handleOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleBlur: () => void;
    startLoadingSuggestions: (text: string) => void;
    handleSuggestionSelected: (index: number) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
