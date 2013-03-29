// Typescript type definitions for jQuery.i18n.properties 1.0.9 by Nuno Fernandes
// Project: http://http://code.google.com/p/jquery-i18n-properties/
// Definitions by: Naoshi Tabuchi
// Definitions: https://bitbucket.org/ntabee/definitelytyped-clone.git


/// <reference path='../jquery/jquery.d.ts'/>

interface I18NProperties {
    properties: (settings) => void;
    prop: (key: string) => string;
}


interface JQuery {
    i18n: I18NProperties;
}
interface JQueryStatic {
    i18n: I18NProperties;
}