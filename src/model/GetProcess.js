/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetProcess = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetProcess model module.
   * @module model/GetProcess
   * @version 7.x.x
   */

  /**
   * Constructs a new <code>GetProcess</code>.
   * @alias module:model/GetProcess
   * @class
   * @param id {Number} Id of the process
   * @param status {module:model/GetProcess.StatusEnum} Status of the process
   * @param name {String} Process name
   */
  var exports = function(id, status, name) {
    var _this = this;

    _this['id'] = id;
    _this['status'] = status;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>GetProcess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProcess} obj Optional instance to populate.
   * @return {module:model/GetProcess} The populated <code>GetProcess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('export_url')) {
        obj['export_url'] = ApiClient.convertToType(data['export_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Id of the process
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Status of the process
   * @member {module:model/GetProcess.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Process name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * URL on which send export the of contacts once the process is completed
   * @member {String} export_url
   */
  exports.prototype['export_url'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "in_process"
     * @const
     */
    "in_process": "in_process",
    /**
     * value: "completed"
     * @const
     */
    "completed": "completed"  };


  return exports;
}));


