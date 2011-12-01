/**
 jquery.quickmode.js ver1.0

The MIT License

Copyright (c) 2011 yapr jun takeno
http://nyapr.net

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
(function($) {
  $.fn.quickmode = function(options){
    /**
     * default Options
     */
    var defaults ={
      is_quick         : true 
    };
    
    var opts = $.extend(defaults , options);
    
    return this.each(function(){
      
      $(this).find("textarea").live("keydown" , function(data){
        if(opts.is_quick && !data.altKey && data.keyCode == 13){
          $(this).closest("form").submit();
        }else if(data.altKey && data.keyCode == 13){
          $(this).val($(this).val());
        }
        
      });
    });
  };
})(jQuery);