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

/** @class RadJav.GUI.Image
* @extends RadJav.GUI.GObject
* An image.
* Available on platforms: Windows,Linux,OSX,HTML5
*/
RadJav.GUI.Image = RadJav.GUI.GObject.extend (
{
	init: function (obj, text, parent)
	{
		if (obj == null)
			obj = {};

		if (typeof (obj) == "string")
		{
			var name = obj;
			obj = { name: name };
		}

		RadJav.copyProperties (obj, {
					type: "RadJav.GUI.Image", 
					size: "100,100"
				}, false);
		this._super (obj, text, parent);

		if (obj.image != null)
			obj._image = obj.image;

		/** @property {String/Image} [_image=null]
		* @protected
		* The image thats being used. If a string, it will be converted into 
		* an Image when the image is set.
		*/
		this._image = RadJav.setDefaultValue (obj._image, null);
		this._createAppObj();
	}
});

