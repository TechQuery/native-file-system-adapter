export function fromDataTransfer(entries: any): Promise<import("./FileSystemDirectoryHandle.js").default>;
export function getDirHandlesFromInput(input: any): Promise<import("./FileSystemDirectoryHandle.js").default>;
export function getFileHandlesFromInput(input: any): Promise<import("./FileSystemFileHandle.js").default[]>;
export namespace errors {
    let INVALID: string[];
    let GONE: string[];
    let MISMATCH: string[];
    let MOD_ERR: string[];
    function SYNTAX(m: any): string[];
    let SECURITY: string[];
    let DISALLOWED: string[];
}
export namespace config {
    let writable: {
        new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
        prototype: WritableStream;
    };
}
