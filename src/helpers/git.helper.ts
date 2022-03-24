import { exec } from 'child_process';
import { ConfigOptions } from '../options';

export function gitHelper(packagePath: string, version: string, scope: string, config: ConfigOptions) {
  exec(`git reset ${process.cwd()}`)
    .on('exit', (status) => {
      if ( !status ) {
        const scopeValue = scope ? `: ${scope}` : '';
        exec(`git add ${packagePath}`)
          .on('exit', (status) => {
            if ( !status) {
              exec(`git commit -m 'chore(v${version})${scopeValue}'`)
                .on('exit', (status) => {
                  if(!status) {
                    if ( config?.tag ) {
                      exec(`git tag v${version}`)
                        .on('exit', (status) => {
                          process.exit(status);
                        })
                    } else {
                      process.exit(status);
                    }
                  } else {
                    process.exit(status);
                  }
                })
            } else {
              process.exit(status);
            }
          })
      } else {
        process.exit(status);
      }
    });
}
