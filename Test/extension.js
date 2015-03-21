var std = 
{
	print: function(message)
	{
		module('jsstd').Print(message, '\n');
	},

	readLine: function()
	{
		var mm = {};
		LoadModule.call(mm , 'jsstd' );
		LoadModule.call(mm , 'jsio' );
		return mm.File.stdin.Read();
		//std.print(File);
	}
};