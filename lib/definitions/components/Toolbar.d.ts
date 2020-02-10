import * as React from "react";
import { Command, CommandGroup, GetIcon } from "../types";
import { Tab } from "../types/Tab";
import { L18n } from "..";
import { ClassValue } from "../util/ClassNames";
export interface ToolbarProps {
    classes?: ClassValue;
    getIcon: GetIcon;
    commands: CommandGroup[];
    onCommand: (command: Command) => void;
    onTabChange: (tab: Tab) => void;
    readOnly: boolean;
    disablePreview: boolean;
    tab: Tab;
    l18n: L18n;
}
export declare class Toolbar extends React.Component<ToolbarProps> {
    handleTabChange: (tab: Tab) => void;
    render(): JSX.Element;
}
