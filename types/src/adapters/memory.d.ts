export function deserialize(data: {
    kind: "file" | "directory";
    name: string;
    file?: File;
    root?: object;
}): FileHandle | FolderHandle;
export class Sink extends BlobSink {
    constructor(fileHandle: FileHandle, file: File);
    fileHandle: FileHandle;
    _hasLock: boolean;
    _releaseLock(): void;
    abort(): void;
    close(): void;
}
export class InPlaceSink {
    constructor(fileHandle: FileHandle);
    fileHandle: FileHandle;
    size: number;
    _hasLock: boolean;
    _releaseLock(): void;
    write(blob: Blob, position: number): void;
    truncate(size: number): void;
    abort(): void;
    close(): void;
}
export class FileHandle {
    constructor(name?: string, file?: File, writable?: boolean, parent?: any);
    _file: File;
    name: string;
    kind: string;
    _deleted: boolean;
    writable: boolean;
    readable: boolean;
    _parent: any;
    _openWritables: number;
    getFile(): Promise<File>;
    createWritable(opts: any): Promise<Sink | InPlaceSink>;
    isSameEntry(other: any): Promise<boolean>;
    move(dest: any, newName: any): Promise<void>;
    _destroy(): Promise<void>;
    remove(): Promise<void>;
    serialize(): {
        adapter: string;
        kind: string;
        name: string;
        file: File;
    };
}
export class FolderHandle {
    constructor(name: string, writable?: boolean, parent?: any);
    name: string;
    kind: string;
    _deleted: boolean;
    _entries: {
        [x: string]: FolderHandle | FileHandle;
    };
    writable: boolean;
    readable: boolean;
    _parent: any;
    _openWritables: number;
    entries(): AsyncGenerator<[string, FileHandle | FolderHandle]>;
    isSameEntry(other: any): Promise<boolean>;
    getDirectoryHandle(name: string, opts: {
        create: boolean;
    }): Promise<FolderHandle>;
    getFileHandle(name: string, opts: {
        create: boolean;
    }): Promise<FileHandle>;
    removeEntry(name: any, opts: any): Promise<void>;
    _destroy(recursive: any): Promise<void>;
    remove(options?: {}): Promise<void>;
    serialize(): {
        adapter: string;
        kind: string;
        name: string;
        root: {
            kind: "directory";
            name: string;
            children: object;
        };
    };
}
declare function _default(): FolderHandle;
export default _default;
import { BlobSink } from './blobsink.js';
