#!/usr/bin/env node
const fs = require("fs");
const fse = require("fs-extra");

module.exports =  function(){
	fse.copySync("./index.html", "./index.html", {preserveTimestamps: true}, err => {
		if (err){
			return (err);
		}
		console.log("Copy of file created.")
	})
}