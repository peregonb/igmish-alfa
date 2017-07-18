jQuery.fn.wc_variations_image_update = function( variation ) {
		var $form             = this,
			$product          = $form.closest( '.product' ),
			$product_gallery  = $product.find( '.images' ),
			$gallery_img      = $product.find( '.flex-control-nav li:eq(0) img' ),
			$product_img_wrap = $product_gallery.find( '.woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder' ).eq( 0 ),
			$product_img      = $product_img_wrap.find( '.wp-post-image' ),
			$product_link     = $product_img_wrap.find( 'a' ).eq( 0 );

		if ( variation && variation.image && variation.image.src && variation.image.src.length > 1 ) {
			$product_img.wc_set_variation_attr( 'src', variation.image.full_src );
			$product_img.wc_set_variation_attr( 'srcset', '' );
			$product_img.wc_set_variation_attr( 'sizes', '' );
			$product_img.wc_set_variation_attr( 'title', variation.image.title );
			$product_img.wc_set_variation_attr( 'alt', variation.image.alt );
			$gallery_img.wc_set_variation_attr( 'src', variation.image.full_src );
			$product_link.wc_set_variation_attr( 'href', variation.image.full_src );
		} else {
			$product_img.wc_reset_variation_attr( 'src' );
			$product_img.wc_reset_variation_attr( 'width' );
			$product_img.wc_reset_variation_attr( 'height' );
			$product_img.wc_reset_variation_attr( 'srcset' );
			$product_img.wc_reset_variation_attr( 'sizes' );
			$product_img.wc_reset_variation_attr( 'title' );
			$product_img.wc_reset_variation_attr( 'alt' );
			$product_img.wc_reset_variation_attr( 'data-src' );
			$product_img.wc_reset_variation_attr( 'data-large_image' );
			$product_img.wc_reset_variation_attr( 'data-large_image_width' );
			$product_img.wc_reset_variation_attr( 'data-large_image_height' );
			$product_img_wrap.wc_reset_variation_attr( 'data-thumb' );
			$gallery_img.wc_reset_variation_attr( 'src' );
			$product_link.wc_reset_variation_attr( 'href' );
		}

		window.setTimeout( function() {
			$product_gallery.trigger( 'woocommerce_gallery_init_zoom' );
			$form.wc_maybe_trigger_slide_position_reset( variation );
			jQuery( window ).trigger( 'resize' );
		}, 10 );
	};