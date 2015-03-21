                               jslibs
                               version 0.95 r2572 win32


LICENSE:
  This software is under the GNU GENERAL PUBLIC LICENSE Version 2
  Refer to the file gpl-2.0.txt for license agreement.


DESCRIPTION:
  jslibs is a standalone JavaScript development runtime environment for using JavaScript as a general-purpose scripting language.
  Check the project website http://jslibs.googlecode.com for more details.


IMPORTANT:
  jslibs binaries are compiled with the dynamic version of the C Runtime Library (msvcr80.dll).
  This mean you need the "Visual C++ 2005 SP1 Redistributable Package (x86)" to be installed on your system.
  To test if the package is already installed, just run ./bin/jshost.exe and if you get an error message, the package is not installed.
  The Microsoft® C Runtime Library installer is provided with this jslibs package (vcredist_x86.exe).
  The Microsoft® C Runtime Library is also available here:
    http://www.microsoft.com/downloads/details.aspx?familyid=200B2FD9-AE1A-4A14-984D-389C36F85647


QUICK TEST:
  Launch "run examples.cmd" and type:
    jshost helloworld.js


DOCUMENTATION:
  The on-line jslibs API documentation is available here:
    http://code.google.com/p/jslibs/wiki/JSLibs


SOURCE CODE:
  The source code of jslibs is available here:
    http://code.google.com/p/jslibs/source/checkout


BUGS:
  You can report bugs or issues here:
    http://code.google.com/p/jslibs/issues/list


CONTACT:
  soubok+jslibs@gmail.com


CHANGES:
  http://code.google.com/p/jslibs/wiki/ReleaseNotes

  
  
  New modules:
  - jssvg - render Scalable Vector Graphics (SVG) to an image buffer.
  - jssdl - wraps the Simple DirectMedia Layer (SDL) library API.
  - jstask - manage simultaneous JavaScript function execution using threads.
  - jsjabber - manage XMPP protocol (Jabber Instant Messaging).
  - jsiconv - conversion between different character encoding.
  - jstrimesh - manage triangle based 3D objects.
  - jsvst - a new host that can be load as a VST plug-in.
  
  Enhancements:
  - use TraceMonkey as JavaScript engine.
  - add a JavaScript debugger written in XUL (runnable in Firefox).
  - complete OpenAL API.
  - add OpenAL EFX (Effects Extension) support.
  - add a static property '_revision' to each jslibs class.
  - jshost: add -g option to control GC call interval (default is 15 seconds).
  - jshost: add -l option to control function name upper or lower camel case.
  - enhance Blob and String behavior similarity.
  - jshost exit code can be throw from the JavaScript code (see issue#69)
  - add _NI_BufferGet support to mutated Blob objects.
  
  API and behavior modifications:
  - remove the Window class from jsgraphics. jssdl module must be use instead.
  - jsobjex module has been merged into jsstd module.
  - jssqlite: support "for each..in" loop on database results.
  - jsio: default mode for Open() finction is read+write for user and group.
  - jsio: rename currentWorkingDirectory into currentDirectory.
  - jsio: rename pathSeparator into directorySeparator.
  - jsio: rename listSeparator into pathSeparator.
  - jsio: add the AvailableSpace() static function.
  - jsio: add numberOfProcessors static property.
  - jsio: add static listSeparator and pathSeparator properties.
  - jsio: add the class Process to replace CreateProcess() static function.
  - jsio: make currentWorkingDirectory property read/write.
  - jsio/Semaphore: add constants values for the 'mode' argument of the constructor.
  - jsstd: remove HideProperties(), add SetPropertyEnumerate(), SetPropertyReadonly() functions.
  - jsstd: add IsBoolean(), IsPrimitive(), IsFunction(), IsVoid() functions.
  - jsstd: replace IdOf and FromId with ObjectToId and IdToObject and manage GCed objects.
  - jsstd: add XdrEncode() and XdrDecode() static functions.
  - jsstd: replace Sandbox.Eval() function with a static SandboxEval() function.
  - jsstd: rename ASSERT() into Assert().
  - jsstd: add a callback support to the Expand() function.
  - jslang/Blob: add Free(wipe) method.
  - jslang/Blob: add substring() method.
  - jsprotex/Texture::Convolution(): remove the autoGain argument.
  - jsprotex/Texture: add ForEachPixels() and LevelRange() methods.
  - jsgl: add LoadTrimesh() and DrawTrimesh() to manage trimesh drawing using VBO.
  - jsgraphics/Transformation: add RotationFromQuaternion() function.
  - jsaudio: add Open() and Close() static function to manage OpenAL initialization.
  - jsaudio: add OalBuffer, OalSource and OalListener classes.
  - jssound: add SoundFileDecoder and OggVorbisDecoder classes to manage sound decoding streaming.
  - jssound: add SplitChannels() static function.
  - jswinshell: add RegistryGet() function to retrieve values from the Windows registry.
  - jsz: make inflate and deflate objects reusable. Remove eof property. Add Z.BEST_SPEED and Z.BEST_COMPRESSION constants.
  - make 'undefined' value immutable.
  - add exception location through fileName and lineNumber properties for each jslibs error class (safe mode only).
  - _configuration.unsafeMode is now read-only.
  - rename global class name (not the property) from "global" into "Global".
  
  Fixed bugs:
  - fix issue#59 - jssqlite crash.
  - fix issue#61 - SharedMemory not closed properly.
  - fix jsfont/Font .ascender, .descender and .width properties.
  - fix jsio/Descriptor::Import() behavior.
  - fix jsprotex/Texture::Normal() arguments.
  - fix jsprotex/Texture::CopyTexImage2D() behavior.
  - fix jsprotex/Texture constructor when importing an image object.
  - fix jsprotex/Texture::AddCracks() when variation argument is missing.
  - fix jslang/blob::substr() function.
  - fix jslang/blob::toSource()/::uneval() functions.
  - fix jswinshell/CreateProcess() function.
  - fix jswinshell/ExtractIcon() function.
  - fix a bug about missing _NI_BufferGet on non-constructed jslang/Blob.
  - fix several memory leaks.
  - fix several GC hazard.
  
  ...among 225 fixes and 137 enhancements.
  
  
  
