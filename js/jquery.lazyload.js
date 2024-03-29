/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            // placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxRjFFNzIyMjg2OTdFNzExQTdDODlBQjVFOTMyMDIwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFODI2MDU1Rjk3OTExMUU3OTBCNzhGOTUwNDVGRTQxRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFODI2MDU1RTk3OTExMUU3OTBCNzhGOTUwNDVGRTQxRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGMUU3MjIyODY5N0U3MTFBN0M4OUFCNUU5MzIwMjBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGMUU3MjIyODY5N0U3MTFBN0M4OUFCNUU5MzIwMjBFIi8+IDwvcmRmOkRlc2NyaXB0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"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if($this.attr("src") != settings.placeholder){
                    return;
                // 新增
                }
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
