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

/** @class RadJav.Color
* Represents a color.
* Available on platforms: Windows,Linux,OSX,HTML5
*/
RadJav.Color = function (r, g, b, a)
{
	if (typeof (r) == "object")
	{
		var color = r;
		r = color.r;
		g = color.g;
		b = color.b;
		a = color.a;
	}

	if (r == null)
		r = 0;

	if (g == null)
		g = 0;

	if (b == null)
		b = 0;

	if (a == null)
		a = 1;

	/** @property {Number} [r=0]
	* Red, between 0 and 1.
	*/
	this.r = r;
	/** @property {Number} [g=0]
	* Green, between 0 and 1.
	*/
	this.g = g;
	/** @property {Number} [b=0]
	* Blue, between 0 and 1.
	*/
	this.b = b;
	/** @property {Number} [a=0]
	* Alpha, between 0 and 1.
	*/
	this.a = a;

	/** @method toHex
	* Return this color as a hex string.
	* @return {String} The hex string representing the color.
	*/
	this.toHex = function ()
	{
		var red = this.r;
		var green = this.g;
		var blue = this.b;

		red *= 255;
		green *= 255;
		blue *= 255;

		red = parseInt (red).toString (16);
		green = parseInt (green).toString (16);
		blue = parseInt (blue).toString (16);

		if (parseInt (red) <= 9)
			red = "0" + red;

		if (parseInt (green) <= 9)
			green = "0" + green;

		if (parseInt (blue) <= 9)
			blue = "0" + blue;

		return ("0x" + red + green + blue);
	}

	/** @method toHTMLColor
	* Return this color as a HTML color string.
	* @return {String} The html string representing the color.
	*/
	this.toHTMLColor = function ()
	{
		var hex = this.toHex ();
		hex = hex.substring (2);
		return ("#" + hex);
	}

	/** @method toHexInt
	* Return this color as a hex color integer.
	* @return {Number} The hex integer representing the color.
	*/
	this.toHexInt = function ()
	{
		var hex = this.toHex ();
		return (parseInt (hex));
	}
}

RadJav.Color.Black = new RadJav.Color (0, 0, 0, 1);
RadJav.Color.White = new RadJav.Color (1, 1, 1, 1);
RadJav.Color.Red = new RadJav.Color (1, 0, 0, 1);
RadJav.Color.Green = new RadJav.Color (0, 1, 0, 1);
RadJav.Color.Blue = new RadJav.Color (0, 0, 1, 1);

/** 
* Parse a color string.
* @param {String} str The color string to parse.
* @return {RadJav.Color} The color.
*/
function parseColor (str)
{
	var color = new RadJav.Color (0, 0, 0, 1);

	if (str == "")
		return (color);

	var iPos = 0;
	iPos = str.indexOf ("#");
	str = str.toLowerCase ();

	if (str == "black")
		color = RadJav.Color.Black;

	if (str == "white")
		color = RadJav.Color.White;

	if (str == "red")
		color = RadJav.Color.Red;

	if (str == "green")
		color = RadJav.Color.Green;

	if (str == "blue")
		color = RadJav.Color.Blue;

	if (iPos > -1)
		iPos++;

	var strR = str.substr ((iPos + 0), 2);
	var strG = str.substr ((iPos + 2), 2);
	var strB = str.substr ((iPos + 4), 2);
	var iR = parseInt (strR, 16);
	var iG = parseInt (strG, 16);
	var iB = parseInt (strB, 16);
	var dR = (iR / 255.0);
	var dG = (iG / 255.0);
	var dB = (iB / 255.0);

	color.r = dR;
	color.g = dG;
	color.b = dB;

	return (color);
}

