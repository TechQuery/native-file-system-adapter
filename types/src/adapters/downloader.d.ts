export class FileHandle {
    constructor(name?: string, methods?: ("sw-transferable-stream" | "sw-message-channel" | "constructing-blob")[]);
    name: string;
    kind: string;
    _methods: ("sw-transferable-stream" | "sw-message-channel" | "constructing-blob")[];
    getFile(): Promise<void>;
    isSameEntry(other: any): Promise<boolean>;
    createWritable(options?: object): Promise<WritableStreamDefaultWriter<any>>;
    private _createBlobWritable;
    private _createSWWritable;
}
