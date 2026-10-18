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
    queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): any;
    requestPermission({ mode }?: {
        mode?: string;
    }): any;
    remove(options?: {
        recursive?: boolean;
    }): Promise<void>;
    getUniqueId(): any;
    isSameEntry(other: FileSystemHandle): any;
    [kAdapter]: FileSystemHandle;
}
export function serialize(handle: FileSystemHandle): {
    adapter: string;
    kind: "file" | "directory";
    name: string;
    [key: string]: any;
};
export const kAdapter: unique symbol;
