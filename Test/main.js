var modules = {};

function module(moduleName)
{
	if(!(moduleName in modules))
	{
		modules[moduleName] = {};
		LoadModule.call( modules[moduleName], moduleName );
	}
	return modules[moduleName];
}


/*var include = (function()
{
	var innerstd = {};
	LoadModule.call( innerstd, 'jsstd' );

	var prevStdErr = _configuration.stderr;
	_configuration.stderr = function(message) {
		prevStdErr(message);
		File.stdin.Read();
		//innerstd.Print(innerstd.File);
	}
	//innerstd.Print(_configuration.stderr);

	return function (script) { innerstd.Exec(script) };
})();*/
function include(script)
{
	module('jsstd').Exec(script);
}

/*try
{*/
	include('program.js');	
/*}
catch(e)
{
	//include("extension.js");
	std.print("Error: " + e.message);
	std.readLine();
}*/