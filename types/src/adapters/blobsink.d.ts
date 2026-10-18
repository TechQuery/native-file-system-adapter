export class BlobSink {
    constructor(file: File);
    file: File;
    size: number;
    write(blob: Blob, position: number): void;
    truncate(size: number): void;
}
