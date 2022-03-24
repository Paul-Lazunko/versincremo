import {
  EVersionPartType,
  versionRegex
} from '../constants';
import { getVersionPartHelper } from './get-version-part.helper';

export function incrementVersionHelper(type: EVersionPartType, packageInfo: any): string {

  const data = packageInfo.version.match(versionRegex);

  const [
    versionRaw,
    majorRaw,
    minorRaw,
    patchRaw
  ] = data;

  let major: number = getVersionPartHelper(majorRaw);
  let minor: number = getVersionPartHelper(minorRaw);
  let patch: number = getVersionPartHelper(patchRaw);

  switch(type) {
    case EVersionPartType.MAJOR:
      major = major + 1;
      minor = 0;
      patch = 0;
      break;
    case EVersionPartType.MINOR:
      minor = minor + 1;
      patch = 0;
      break;
    case EVersionPartType.PATCH:
      patch = patch + 1;
      break;
    default:
      throw new Error(`Versioning type should be one of: major, minor, patch`)
  }
  return `${major}.${minor}.${patch}`;
}
