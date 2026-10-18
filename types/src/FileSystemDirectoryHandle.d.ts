export default FileSystemDirectoryHandle;
export class FileSystemDirectoryHandle extends FileSystemHandle {
    constructor(adapter: any);
    getDirectoryHandle(name: string, options?: {
        create?: boolean;
    }): Promise<FileSystemDirectoryHandle>;
    entries(): AsyncGenerator<[string, FileSystemHandle | FileSystemDirectoryHandle]>;
    getFileHandle(name: string, options?: {
        create?: boolean;
    }): any;
    removeEntry(name: string, options?: {
        recursive?: boolean;
    }): any;
    resolve(possibleDescendant: any): Promise<any[]>;
    keys(): AsyncGenerator<string, void, unknown>;
    values(): AsyncGenerator<FileSystemHandle | FileSystemDirectoryHandle, void, unknown>;
    [kAdapter]: FileSystemDirectoryHandle;
    [Symbol.asyncIterator](): AsyncGenerator<[string, FileSystemHandle | FileSystemDirectoryHandle], any, any>;
}
import FileSystemHandle from './FileSystemHandle.js';
declare const kAdapter: unique symbol;
