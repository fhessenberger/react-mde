import * as React from "react";
import { Command, CommandGroup, GenerateMarkdownPreview, GetIcon, Suggestion } from "../types";
import { Preview } from ".";
import { Tab } from "../types/Tab";
import { Classes, L18n } from "..";
import { CommandOrchestrator } from "../commandOrchestrator";
import { ClassValue } from "../util/ClassNames";
export interface ReactMdeProps {
    value: string;
    onChange: (value: string) => void;
    selectedTab: "write" | "preview";
    onTabChange: (tab: "write" | "preview") => void;
    generateMarkdownPreview: GenerateMarkdownPreview;
    minEditorHeight: number;
    maxEditorHeight: number;
    minPreviewHeight: number;
    classes?: Classes;
    /**
     * "className" is OBSOLETE when will soon be removed in favor of the "classes" prop
     */
    className?: ClassValue;
    commands?: CommandGroup[];
    getIcon?: GetIcon;
    emptyPreviewHtml?: string;
    loadingPreview?: React.ReactNode;
    readOnly?: boolean;
    disablePreview?: boolean;
    autoGrow?: boolean;
    suggestionTriggerCharacters?: string[];
    loadSuggestions?: (text: string) => Promise<Suggestion[]>;
    textAreaProps?: Partial<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
    l18n?: L18n;
}
export interface ReactMdeState {
    editorHeight: number;
}
export declare class ReactMde extends React.Component<ReactMdeProps, ReactMdeState> {
    commandOrchestrator: CommandOrchestrator;
    textAreaRef: HTMLTextAreaElement;
    textAreaLineHeight: number;
    previewRef: Preview;
    gripDrag: {
        originalDragY: number;
        originalHeight: number;
    };
    keyCommandMap: {
        [key: string]: Command;
    };
    static defaultProps: Partial<ReactMdeProps>;
    constructor(props: ReactMdeProps);
    handleTextChange: (value: string) => void;
    handleGripMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleGripMouseUp: () => void;
    handleGripMouseMove: (event: MouseEvent) => void;
    handleTabChange: (newTab: Tab) => void;
    componentDidMount(): void;
    adjustEditorSize: () => void;
    setTextAreaRef: (element: HTMLTextAreaElement) => void;
    handleCommand: (command: Command) => void;
    render(): JSX.Element;
}
