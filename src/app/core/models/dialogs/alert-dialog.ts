export class AlertDialog {
    constructor(public message: string, public type: DialogType, public okCallback: (val?: any) => any, public cancelCallback: () => any,
        public defaultValue: string, public okLabel: string, public cancelLabel: string, public title?: string) {

    }
}

export enum DialogType {
    alert,
    confirm,
    prompt
}