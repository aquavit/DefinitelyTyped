// Typescript type definitions for jQuery.i18n.properties 2.55.0 by M. Alsup
// Project: http://malsup.com/jquery/block/
// Definitions by: Naoshi Tabuchi
// Definitions: https://bitbucket.org/ntabee/definitelytyped-clone.git


/// <reference path='../jquery/jquery.d.ts'/>

interface BlockUI {
    (opts?: any): void;
    defaults: any;
}
interface UnblockUI {
    (opts?: any): void;
    defaults: any;
}
interface JQuery {
    blockUI: BlockUI;
    unblockUI : UnblockUI;
}

interface JQueryStatic {
    blockUI: BlockUI;
    unblockUI: UnblockUI;
}

