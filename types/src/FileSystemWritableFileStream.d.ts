export default FileSystemWritableFileStream;
export class FileSystemWritableFileStream extends WritableStream<any> {
    constructor(writer: any);
    private _closed;
    seek(position: number): Promise<void>;
    truncate(size: number): Promise<void>;
    write(data: any): Promise<void>;
}
