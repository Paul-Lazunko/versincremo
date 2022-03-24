import { packageInfo, versionRegex } from '../constants';


export function getVersionPartHelper(raw: string): number {
  let value = 0;
  try {
    value = parseInt(raw, 10);
    return value;
  } catch (e) {
    return 0;
  }
}
