import {
  FileSystemDirectoryHandle,
  FileSystemFileHandle,
  FileSystemHandle,
  FileSystemWritableFileStream,
  showDirectoryPicker,
  showOpenFilePicker,
  showSaveFilePicker,
} from './es6.js'

for (const [key, value] of Object.entries({
  FileSystemDirectoryHandle,
  FileSystemFileHandle,
  FileSystemHandle,
  FileSystemWritableFileStream,
  showDirectoryPicker,
  showOpenFilePicker,
  showSaveFilePicker,
}))
  if (typeof Reflect.get(globalThis, key) === 'undefined')
    Reflect.set(globalThis, key, value)
