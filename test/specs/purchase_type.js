/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global describe:true, it:true, XT:true, XM:true, XV:true, process:true,
  module:true, require:true, exports:true */

(function () {
  "use strict";

  /**
  An Inventory control mechanism used for categorizing items regardless of item type.
  Distinguished from product category, which categorizes sold items only.
  @class
  @alias PurchaseType
  @property {String} Code
  @property {String} Description
  **/

  var spec = {
      recordType: "XM.PurchaseType",
	  enforceUpperKey: false,
      collectionType: "XM.PurchaseTypeCollection",
      listKind: "XV.PurchaseTypeList",
      instanceOf: "XM.Model",
      attributes: ["code", "description"],
      /**
        @member -
        @memberof PurchaseType
        @description The ID attribute is "code", which will not be automatically uppercased.
      */
      idAttribute: "code",
      /**
        @member -
        @memberof PurchaseType
        @description Used in the Purchasing module
      */
      extensions: ["purchasing"], 
      /**
        @member -
        @memberof PurchaseType
        @description PurchaseTypes are lockable.
      */
      isLockable: true,
      cacheName: null,
      /**
        @member -
        @memberof PurchaseType
        @description Purchase Types can be created, updated, or deleted by users with the "MaintainPurchaseTypes" privilege.
      */
      privileges: {
        createUpdateDelete: "MaintainPurchaseTypes",
        read: true,
      },
      createHash: {
        code: "PType" + Math.random(),
        description: 'PurchaseType Description'
      },
      updatableField: "description",
    };

  exports.spec = spec;

}());