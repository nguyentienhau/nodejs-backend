"use strict";

const { Account } = require("../models");
const { ServiceHelpers } = require("../helpers");

module.exports = ServiceHelpers.createBasicServices(Account, function (data = {}) {
	return Object.entries(data).reduce(function (result, entry) {
		const [key, value] = entry;

		if (value !== null && value !== undefined) {
			if (
				(["id"].includes(key) && value.isNumber() && value > 0) ||
				(["role", "status"].includes(key) && value.isNumber()) ||
				(["email", "password", "fullName"].includes(key) && value.isString())
			) {
				result[key] = value;
			}
		}

		return result;
	}, {});
});
