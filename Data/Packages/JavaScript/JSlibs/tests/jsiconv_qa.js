LoadModule('jsiconv');

/// basic tests [rfmt]

	QA.ASSERT( new Iconv('UTF-8', 'ISO-8859-1')('�').length, 2, '"�" char length in UTF-8' );

	var conv = new Iconv('UTF-8', 'ISO-8859-1');
	var invConv = new Iconv('ISO-8859-1', 'UTF-8');
	var converted = conv('�t�');
	var result = invConv(converted);
	QA.ASSERT_STR( result, '�t�', 'string convertion' );


	var conv = new Iconv('UTF-8', 'ISO-8859-1');
	var invConv = new Iconv('ISO-8859-1', 'UTF-8');
	var converted = conv('�t�');
	var result = '';
	for each ( var c in converted )
		result += invConv(c);
	QA.ASSERT_STR( result, '�t�', 'char by char convertion' );


/// invalid sequense detection [rfmt]

	var utf8 = (new Iconv('UTF-8', 'ISO-8859-1'))('�t�').split('');
	utf8.splice(1,0,'x'); // insert an invalid multybyte sequense
	utf8 = utf8.join('');
	var res = (new Iconv('ISO-8859-1', 'UTF-8'))(utf8);
	
	QA.ASSERT_STR( res[0], '?', 'invalid sequense char' )
	QA.ASSERT_STR( res[2], '?', 'invalid sequense char' )


/// identity [rmt]

	ui = new Iconv('UTF-8', 'ISO-8859-1');
	iu = new Iconv('ISO-8859-1', 'UTF-8');
	
	for ( var cc = 0; cc < 256; ++cc ) {
		
		var c0 = String.fromCharCode(cc);
		var c1 = iu(ui(c0));
		QA.ASSERT_STR( c0, c1, 'char '+cc );
	}


/// encoding list [rfmt]

	var list = Iconv.list;
//	QA.ASSERT( list.length, 387, 'encoding count' );
	QA.ASSERT( list.indexOf('UTF-8'), 11, 'has UTF-8' );
	QA.ASSERT( list.indexOf('ISO-8859-1'), 48, 'has ISO-8859-1' );


/// test javascrit unicode char

	var conv = new Iconv('UCS-2-INTERNAL', 'ISO-8859-1', true, true);
	var res = conv('�t�');
	
	QA.ASSERT( res.length, 6, 'string length' );
	QA.ASSERT( String.charCodeAt(res[0]), 233, 'the char' );


/// store UTF-8 to JS unicode

	var conv = new Iconv('UTF-8', 'ISO-8859-1', true, false); // source is not wide, dest is wide
	var res = conv('�');
	
	QA.ASSERT( res.length, 1, 'UC string length' );
	QA.ASSERT( String.charCodeAt(res[0]), 43459, '"�" is (c3 a9)' );

	var res = conv('����');
	QA.ASSERT( res.length, 4, 'UC string length' );
	QA.ASSERT( String.charCodeAt(res[0]), 43459, '"�" is (c3 a9)' );
	QA.ASSERT( String.charCodeAt(res[1]), 43459, '"�" is (c3 a9)' );
	QA.ASSERT( String.charCodeAt(res[2]), 43459, '"�" is (c3 a9)' );
	QA.ASSERT( String.charCodeAt(res[3]), 43459, '"�" is (c3 a9)' );


/// store UTF-16 to JS string and unicode string

	var conv = new Iconv('UTF-16', 'ISO-8859-1', false, false);
	var res = conv('abc');
	QA.ASSERT( res.length, 8, 'non-UC string length' );

	var conv = new Iconv('UTF-16', 'ISO-8859-1', true, false);
	var res = conv('abc');
	QA.ASSERT( res.length, 4, 'UC string length' );


/// store UTF-8 to JS string and unicode string

	var conv = new Iconv('UTF-8', 'ISO-8859-1', false, false); // source is not wide, dest is wide
	var res = conv('�t�');
	QA.ASSERT( res.length, 5, 'UC string length' );
	
	var conv = new Iconv('UTF-8', 'ISO-8859-1', true, false); // source is not wide, dest is wide
	var res = conv('�t�');
	QA.ASSERT( res.length, 3, 'UC string length' );


/// store UCS-2-INTERNAL to JS unicode
	
	var conv = new Iconv('UCS-2-INTERNAL', 'ISO-8859-1', true, false); // source is not wide, dest is wide
	var res = conv('�t�');
	QA.ASSERT( res.length, 3, '"�t�" UC string length' );

	QA.ASSERT( res, '�t�', 'string test' );


/// store UCS-2-INTERNAL to JS unicode

	var conv = new Iconv('UCS-2-INTERNAL', 'ISO-8859-1', true, false); // source is not wide, dest is wide

	var src = "\u007A\u6C34";
	var res = conv(src);

	QA.ASSERT( res.length, 2, 'check the resulting string length' );
	QA.ASSERT_STR( res, "z4", 'check the resulting string' );

