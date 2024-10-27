export default FileSystemHandle;
export type FileSystemHandlePermissionDescriptor = {
    mode?: ("read" | "readwrite");
};
export class FileSystemHandle {
    constructor(adapter: FileSystemHandle & {
        writable: any;
    });
    name: string;
    kind: ("file" | "directory");
    queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<any>;
    requestPermission({ mode }?: {
        mode?: string;
    }): Promise<any>;
    remove(options?: {
        recursive?: boolean;
    }): Promise<void>;
    isSameEntry(other: FileSystemHandle): Promise<any>;
    [kAdapter]: any;
}
declare const kAdapter: unique symbol;
