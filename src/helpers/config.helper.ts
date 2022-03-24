import { ConfigOptions } from '../options';
import { EVersionPartType } from '../constants';

export function configHelper(packageInfo: any): [ EVersionPartType, string, ConfigOptions] {
  const [ nodeBin, main, type, scope ] = process.argv;
  const config: ConfigOptions = packageInfo.versincremo || {};
  const processedScope: string = scope || config.scope || '';
  return [ type as EVersionPartType, processedScope, config ];
}
