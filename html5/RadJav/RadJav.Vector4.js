/*
	MIT-LICENSE
	Copyright (c) 2017 Higher Edge Software, LLC

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
	and associated documentation files (the "Software"), to deal in the Software without restriction, 
	including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
	and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
	subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial 
	portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
	LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/** @class RadJav.Vector4
* A Vector4 class.
* Available on platforms: Windows,Linux,OSX,HTML5
*/
RadJav.Vector4 = function (x, y, z, w)
{
	if (x == null)
		x = 0;

	if (y == null)
		y = 0;

	if (z == null)
		z = 0;

	if (w == null)
		w = 0;

	if (x instanceof RadJav.Vector2)
	{
		var temp = x;
		x = temp.x;
		y = temp.y;
	}

	if (x instanceof RadJav.Vector3)
	{
		var temp = x;
		x = temp.x;
		y = temp.y;
		z = temp.z;
	}

	if (x instanceof RadJav.Vector4)
	{
		var temp = x;
		x = temp.x;
		y = temp.y;
		z = temp.z;
		w = temp.w;
	}

	/** @property {Number} [x=0]
	* The X component.
	*/
	this.x = x;
	/** @property {Number} [y=0]
	* The Y component.
	*/
	this.y = y;
	/** @property {Number} [z=0]
	* The Z component.
	*/
	this.z = z;
	/** @property {Number} [w=0]
	* The W component.
	*/
	this.w = w;

	/** @method toString
	* Convert this object to a string.
	* @return {String} The string representing this object.
	*/
	this.toString = function ()
	{
		return (this.x + "," + this.y + "," + this.z + "," + this.w);
	}
}

function parseVector4 (string)
{
	var v4dReturn = new RadJav.Vector4 ();

	if (string == "")
		return (v4dReturn);

	string = string.toLowerCase ();
	string = string.replace (/ /g, "");
	var aryStrings = string.split (",");

	v4dReturn.x = parseFloat (aryStrings[0]);
	v4dReturn.y = parseFloat (aryStrings[1]);
	v4dReturn.z = parseFloat (aryStrings[2]);
	v4dReturn.w = parseFloat (aryStrings[3]);

	return (v4dReturn);
}

