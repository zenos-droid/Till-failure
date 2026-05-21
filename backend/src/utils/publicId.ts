export function toPublicId(prefix: string, value: string) {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48);

  return prefix + '-' + (slug || crypto.randomUUID().slice(0, 8));
}
