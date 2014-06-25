/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global describe:true, it:true, XT:true, XM:true, XV:true, process:true,
  module:true, require:true, exports:true */

(function () {
  "use strict";

  /**
  Purchase Requests are considered to be valid source of supply by the planning system.
  @class
  @alias PurchaseRequestListItem
  @property {String} Code
  @property {String} Description
  **/

  var spec = {
      recordType: "XM.PurchaseRequestListItem",
      enforceUpperKey: false,
      collectionType: "PurchaseRequestListItem",
      //listKind: 
      instanceOf: "XM.Model",
      attributes: ["UUID", "number"],
      /**
        @member -
        @memberof PurchaseRequestListItem
        @description The ID attribute is "UUID", which will not be automatically uppercased.
      */
      idAttribute: "UUID",
      /**
        @member -
        @memberof PurchaseRequestListItem
        @description Used in the CRM and Project module
      */
      extensions: ["purchasing"], 
      /**
        @member -
        @memberof PurchaseRequestListItem
        @description Class Codes are lockable.
      */
      isLockable: false,
      cacheName: null,
      /**
        @member -
        @memberof PurchaseRequestListItem
        @description Class Codes can be read by users with "ViewPurchaseRequests" privilege and can be created, updated,
          or deleted by users with the "MaintainPurchaseRequests" privilege.
      */
      privileges: {
        createUpdateDelete: "MaintainPurchaseRequests",
        read: "ViewPurchaseRequests"
      },
      createHash: {
        code: "CCode" + Math.random(),
        description: 'Class Code Description'
      },
      updatableField: "quantity",
    };

  exports.spec = spec;

}());
