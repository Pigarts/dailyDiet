export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            status: undefined;
            newFood: undefined;
            feedback: {
                type: "GOOD" | "BAD"
            };
            details: {
                time: string
                type: "GOOD" | "BAD"
            }
            editFood: {
                time: string
            }
        }
    }
}