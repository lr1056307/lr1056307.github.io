/*!
 * Generated file - Do not change here!
 */
+function(t,e,i){var a=e("#navigation"),n=e("#navBtn");if(e(t).on("resize",function(){i.mq("(min-width:991px)")&&(a.removeClass("activated show"),n.removeClass("open"))}),n.on("click",function(){return a.hasClass("show")?(a.removeClass("show"),e(this).removeClass("open")):(a.addClass("activated show"),e(this).addClass("open")),!1}),e(document).on("keyup",function(t){27==t.keyCode&&a.removeClass("show")}),e("#mainNav").watch({properties:"attr_class",callback:function(t,a){~t.vals[a].indexOf("affix-top")?e(".register-btn").removeClass("btn btn-cta-1 navbar-btn btn-xl navbar-right navbar-btn-cta"):i.mq("(max-width:991px)")||e(".register-btn").addClass("btn btn-cta-1 navbar-btn btn-xl navbar-right navbar-btn-cta")}}),e(t).on("resize",function(){e(".navbar-cookie-top").css("margin-top",e(".cookie-bar").height()+50+"px"),s()}),e(".hero-content").each(function(t){e(this).hasClass("grey")&&e(this).find("p.label").addClass("grey")}),e(".social-btn-ctr > a").addClass("col-xs-3 col-sm-3 col-md-3"),e(".register-btn-ctr > span > a").addClass("register-btn"),e("a.register-btn").closest("li").css("top",0),e("#mainNav").hasClass("affix-top")||e(".register-btn").addClass("btn btn-cta-1 navbar-btn btn-xl navbar-right navbar-btn-cta"),i.mq("(min-width:991px)")){var o=0;e(".subscription-component .panel-text").each(function(){e(this).height()>o&&(o=e(this).height())}),e(".subscription-component .panel-text").height(o)}var o=0;e(".blog-overview-component .panel-body .content").each(function(){console.log(e(this).height()),e(this).height()>o&&(o=e(this).height())}),e(".blog-overview-component .panel-body .content").height(o);var s=function(){e(".imagetext-component").each(function(a,n){var o=e(this).data("direction"),s=e(this).find(".imagetext-image");if(i.mq("(min-width:991px)")){var r,c=e(this).find(".imagetext-content"),l=c.offset(),h=0;if(e(n).hasClass("imagetext-component-video")){h=0;var p=e(n),b=p.find("video");p.css("min-height",b.height()+"px")}"left"===o?(r=l.left-100,s.css({position:"absolute",top:h+"px",width:r,left:0})):"right"===o&&(r=e(t).width()-(l.left+c.outerWidth())-100,s.css({position:"absolute",top:h+"px",width:r,right:0}))}else"left"===o?s.css({position:"relative",top:"auto","margin-right":"30px"}):"right"===o&&s.css({position:"relative",top:"auto","margin-left":"30px"})})};s(),e.material.init({radioElements:".radio label > input[type=radio], label.radio-inline > input[type=radio]",checkboxElements:".checkbox  label > input[type=checkbox], label.checkbox-inline > input[type=checkbox]"}),e.material.custom=function(t){e(".radio label > input[type=radio], label.radio-inline > input[type=radio]").after("<span class='radio-material'><span class='check'></span></span>")}(),e("select:not([size])").selectric()}(window,jQuery,Modernizr);