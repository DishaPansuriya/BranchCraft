import { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
    Home: undefined;
    DishaMode: undefined;
    PratikMode: undefined;
    Animation: undefined;
    CheckToggle: undefined;
    ServerDrivenUI: undefined;
    Password: undefined;
    Dropdown: undefined;
    Payment: undefined;
}

export type ApplicationScreenProps =
    StackScreenProps<ApplicationStackParamList>