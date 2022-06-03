/**
 * Smaller version of v2/core/flowCompat file, so that regression.test.ts does
 * not fail.
 *
 * In the regression test we replace import statements like below:
 * replace `import .... from 'v2/core/util/flowCompat'`
 * with `import .... from 'src/flowCompat'`
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

export type $TSFixMeAny = any;
export type $TSFixMeFunction = (...args: Array<any>) => any;
export type $TSFixMeObject = Record<string, any>;
