export function raise(message = 'An error happened'): never {
  throw new Error(message);
}
