import {
  EVersionPartType,
  packageInfo,
  packagePath,
} from './constants';
import { ConfigOptions } from './options';
import {
  configHelper,
  incrementVersionHelper,
  fsHelper,
  gitHelper
} from './helpers';

const [ type, scope, config ]: [EVersionPartType, string, ConfigOptions] = configHelper(packageInfo);
const version = incrementVersionHelper(type as EVersionPartType, packageInfo);
packageInfo.version = version;
fsHelper(packageInfo);
gitHelper(packagePath, version, scope, config);
