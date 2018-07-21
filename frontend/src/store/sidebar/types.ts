export interface SidebarState {
    readonly screenSizeIsOpen: boolean;
    readonly conditionalIsOpen: boolean;
}

export interface SidebarDispatchProps {
    setScreenSizeSidebarState: (state: boolean) => any;
    setConditionalSidebarState: (state: boolean) => any;
}
