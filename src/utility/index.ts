export function getCompleteUri(
  uri: string,
  username: string,
  password: string
): string {
  return uri.replace('<username>', username).replace('<password>', password);
}
