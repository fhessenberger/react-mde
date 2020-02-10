import * as React from "react";
import { CaretCoordinates } from "../util/TextAreaCaretPosition";
import { Suggestion } from "../types";
import { ClassValue } from "../util/ClassNames";
export interface SuggestionsDropdownProps {
    classes?: ClassValue;
    caret: CaretCoordinates;
    suggestions: Suggestion[];
    onSuggestionSelected: (index: number) => void;
    /**
     * Which item is focused by the keyboard
     */
    focusIndex: number;
}
export declare const SuggestionsDropdown: React.FunctionComponent<SuggestionsDropdownProps>;
