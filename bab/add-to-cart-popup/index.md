# Add to cart popup customization
<sub>making add to cart as flyout from right similar to [Jumbo](http://jumbo.ae) </sub>

### Implementation

1. Enable **add to cart popup** feature on your BAB site
2. Include the below javascript in your site theme,
```javascript
  /*
  *  shopping cart as flyout
  *  ======================
  *  - when the popup is open
  *    - `popup-dialog-open` class will be added on the shopping cart popup `.shopping-cart-popup`
  *    - `active` class will be added on `.shopping-cart` in header `#hd`
  */

  $(document).bind("shopping-cart-popup", function (e, qtip_dialog) {
    var qtip_options = {
      "events.visible": function () {
        $(this).addClass("popup-dialog-open");
        var on_visible = $(this).qtip("api").options.on_visible;
        if (on_visible) {
          $.proxy(on_visible, this)();
        }
      },
      "events.hide": function () {
        $(this).removeClass("popup-dialog-open");
        var on_hide = $(this).qtip("api").options.on_hide;
        if (on_hide) {
          $.proxy(on_hide, this)();
        }
      },
      "show.effect": false,
      "hide.effect": function () {
        if ($.support.transition) {
          $(this).delay(350);
        }
      }
    };
    qtip_dialog.qtip("api").set(qtip_options);
    qtip_dialog.qtip("api").set("on_visible", function () {
      $("#hd .shopping-cart").addClass("active");
    });
    qtip_dialog.qtip("api").set("on_hide", function () {
      $("#hd .shopping-cart").removeClass("active");
    });
  });
```
 > the above javascript code does the job of,
  >> - Adding `popup-dialog-open` class to the `shopping-cart-popup`
  >> - Adding `active` class to `shopping-cart` in the header
  >> - Removes any default animation on the `qtip` popup (animation wil be done through CSS)

3.  For shopping cart to open as flyout from right,
  - Initial position of `shopping-cart-poup` is set to negative
```css
    .shopping-cart-popup {
	    width: 390px!important;
	    min-width: 390px!important;
	    top: 55px!important;
	    bottom: 0!important;
	    left: auto!important;
	    padding: 0;
	    position: fixed;
	    right: -390px;
	    overflow-y: auto;
	    margin: 0;
	    background: #f2f2f2!important;
	}
```
  - on click of the `shopping-cart` icon on the header, `popup-dialog-open` will be added to the `shopping-cart-popup`,  `.shopping-cart-popup.popup-dialog-open` can be styled to have right 0px
  - 
```css
	.shopping-cart-popup.popup-dialog-open {
	    right: 0;
	}
	.popup-dialog.popup-dialog-open {
	    top: 55px!important;
	}
```
