var egg=new Egg;egg.addCode("o,r,b",function(){document.body.style.backgroundImage="url(img2/space3.gif)",jQuery("#globe2").fadeIn(0,function(){window.setTimeout(function(){jQuery("#globe2").hide()},5e3)}),jQuery("#cmana").fadeIn(0,function(){window.setTimeout(function(){jQuery("#cmana").hide()},5e3)}),jQuery("#globe").fadeOut(0,function(){window.setTimeout(function(){jQuery("#globe").show()},5e3)}),window.setTimeout(function(){document.body.style.backgroundImage="url(img2/space2.jpg)"},5e3)}),egg.addCode("s,e,s,a,m,e",function(){jQuery("#ali").fadeOut(1e3,function(){window.setTimeout(function(){jQuery("#globe").show()},5e3)})}),egg.addHook(function(){console.log("Hook called for: "+this.activeEgg.keys),console.log(this.activeEgg.metadata)}),egg.listen();