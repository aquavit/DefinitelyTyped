// Typescript type definitions for base64 2.6 by dankogai
// Project: https://github.com/dankogai/js-base64
// Definitions by: Naoshi Tabuchi
// Definitions: https://bitbucket.org/ntabee/definitelytyped-clone.git

interface IBase64 {
    encode: (s: string) => string;
    decode: (s: string) => string;
}
declare var Base64: IBase64;
