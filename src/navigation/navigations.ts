import { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
    Home: undefined;
    DishaMode: undefined;
    PratikMode: undefined;
}

export type ApplicationScreenProps =
    StackScreenProps<ApplicationStackParamList>