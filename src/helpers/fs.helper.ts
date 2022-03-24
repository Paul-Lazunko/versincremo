import { writeFileSync } from 'fs';
import { packageInfo, packagePath } from '../constants';

export function fsHelper(packageInfo: any) {
  return writeFileSync(packagePath, JSON.stringify(packageInfo, null, 2), 'utf8');
}
