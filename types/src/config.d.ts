export default config;
declare namespace config {
    let ReadableStream: {
        new (underlyingSource: UnderlyingByteSource, strategy?: {
            highWaterMark?: number;
        }): ReadableStream<Uint8Array>;
        new <R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
        new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
        prototype: ReadableStream;
    };
    let WritableStream: {
        new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
        prototype: WritableStream;
    };
    let TransformStream: {
        new <I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
        prototype: TransformStream;
    };
    let DOMException: {
        new (message?: string, name?: string): DOMException;
        prototype: DOMException;
        readonly INDEX_SIZE_ERR: 1;
        readonly DOMSTRING_SIZE_ERR: 2;
        readonly HIERARCHY_REQUEST_ERR: 3;
        readonly WRONG_DOCUMENT_ERR: 4;
        readonly INVALID_CHARACTER_ERR: 5;
        readonly NO_DATA_ALLOWED_ERR: 6;
        readonly NO_MODIFICATION_ALLOWED_ERR: 7;
        readonly NOT_FOUND_ERR: 8;
        readonly NOT_SUPPORTED_ERR: 9;
        readonly INUSE_ATTRIBUTE_ERR: 10;
        readonly INVALID_STATE_ERR: 11;
        readonly SYNTAX_ERR: 12;
        readonly INVALID_MODIFICATION_ERR: 13;
        readonly NAMESPACE_ERR: 14;
        readonly INVALID_ACCESS_ERR: 15;
        readonly VALIDATION_ERR: 16;
        readonly TYPE_MISMATCH_ERR: 17;
        readonly SECURITY_ERR: 18;
        readonly NETWORK_ERR: 19;
        readonly ABORT_ERR: 20;
        readonly URL_MISMATCH_ERR: 21;
        readonly QUOTA_EXCEEDED_ERR: 22;
        readonly TIMEOUT_ERR: 23;
        readonly INVALID_NODE_TYPE_ERR: 24;
        readonly DATA_CLONE_ERR: 25;
    };
    let Blob: {
        new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
        prototype: Blob;
    };
    let File: {
        new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
        prototype: File;
    };
}
