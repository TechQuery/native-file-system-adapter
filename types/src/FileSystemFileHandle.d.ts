export default FileSystemFileHandle;
export class FileSystemFileHandle extends FileSystemHandle {
    constructor(adapter: any);
    createWritable(options?: {
        keepExistingData?: boolean;
        mode?: "exclusive-atomic" | "exclusive-in-place" | "siloed";
    }): Promise<FileSystemWritableFileStream>;
    getFile(): Promise<File>;
    move(destinationDirectoryOrNewName: FileSystemDirectoryHandle | string, newName?: string): Promise<void>;
    [kAdapter]: FileSystemFileHandle;
    [Symbol.toStringTag]: string;
}
import FileSystemHandle from './FileSystemHandle.js';
import FileSystemWritableFileStream from './FileSystemWritableFileStream.js';
declare const kAdapter: unique symbol;
