document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-40300999' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							// Add timeout for the images to load.
							setTimeout( function() {
								const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
								const isotope = new Isotope( element, {
									itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
									percentPosition: true,
								} );
								imagesLoaded( element ).on( 'progress', function() {
									isotope.layout();
								});
								imagesLoaded( element ).on( 'always', function() {
									element.parentNode.style.visibility = 'visible';
								});
								UAGBImageGalleryMasonry.init( {"block_id":"40300999","classMigrate":true,"readyToRender":true,"mediaGallery":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-6-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-6-300x300.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-6.jpg","height":400,"width":400,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":305,"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-6.jpg","alt":"","link":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/plants-store-gallery-img-6\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-1-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-1-300x300.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-1.jpg","height":400,"width":400,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":306,"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-1.jpg","alt":"","link":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/plants-store-gallery-img-1\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-2-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-2-300x300.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-2.jpg","height":400,"width":400,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":307,"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-2.jpg","alt":"","link":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/plants-store-gallery-img-2\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-3-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-3-300x300.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-3.jpg","height":400,"width":400,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":308,"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-3.jpg","alt":"","link":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/plants-store-gallery-img-3\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-4-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-4-300x300.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-4.jpg","height":400,"width":400,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":309,"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-4.jpg","alt":"","link":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/plants-store-gallery-img-4\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-5-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"https:\/\/websitedemos.net\/plant-shop-08\/wp-content\/uploads\/sites\/964\/2021\/08\/plants-store-gallery-img-5-300x300.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-5.jpg","height":400,"width":400,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":310,"url":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/wp-content\/uploads\/2021\/08\/plants-store-gallery-img-5.jpg","alt":"","link":"http:\/\/localhost\/wordpress-6.6.2\/wordpress\/plants-store-gallery-img-5\/","caption":""}],"mediaIDs":[305,306,307,308,309,310],"feedLayout":"masonry","imageDisplayCaption":false,"galleryImageSize":"full","columnsMob":1,"gridImageGap":16,"imageEnableZoom":false,"tileSize":0,"focusList":[],"focusListObject":[],"galleryImageSizeTablet":"large","galleryImageSizeMobile":"medium","imageClickEvent":"none","disableLazyLoad":false,"lightboxDisplayCaptions":false,"lightboxThumbnails":false,"lightboxDisplayCount":false,"lightboxCloseIcon":"xmark","lightboxCaptionHeight":50,"lightboxCaptionHeightTablet":"","lightboxCaptionHeightMobile":"","lightboxIconSize":24,"lightboxIconSizeTablet":"","lightboxIconSizeMobile":"","captionVisibility":"hover","captionDisplayType":"overlay","imageCaptionAlignment":"center center","imageCaptionAlignment01":"center","imageCaptionAlignment02":"center","imageDefaultCaption":"No Caption","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","columnsDesk":3,"columnsTab":3,"gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"px","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTop":"","feedMarginRight":"","feedMarginBottom":"","feedMarginLeft":"","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","feedMarginUnitLink":true,"carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPages":1,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateUseLoader":true,"paginateLimit":9,"paginateButtonAlign":"center","paginateButtonText":"Load More Images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"lightboxEdgeDistance":10,"lightboxEdgeDistanceTablet":"","lightboxEdgeDistanceMobile":"","lightboxBackgroundEnableBlur":true,"lightboxBackgroundBlurAmount":5,"lightboxBackgroundColor":"rgba(0,0,0,0.75)","lightboxIconColor":"rgba(255,255,255,1)","lightboxCaptionColor":"rgba(255,255,255,1)","lightboxCaptionBackgroundColor":"rgba(0,0,0,1)","captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"px","captionFontSize":"","captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","lightboxLoadGoogleFonts":false,"lightboxFontFamily":"Default","lightboxFontWeight":"","lightboxFontStyle":"normal","lightboxTransform":"","lightboxDecoration":"none","lightboxFontSizeType":"px","lightboxFontSize":"","lightboxFontSizeTab":"","lightboxFontSizeMob":"","lightboxLineHeightType":"em","lightboxLineHeight":"","lightboxLineHeightTab":"","lightboxLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"rgba(255,255,255,1)","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"rgba(0,0,0,0.75)","captionBackgroundColorHover":"rgba(0,0,0,0.75)","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":false,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopWidth":"","imageBorderLeftWidth":"","imageBorderRightWidth":"","imageBorderBottomWidth":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderStyle":"","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, '.uagb-block-40300999', {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-40300999+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-40300999+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}, [] );
								UAGBImageGalleryMasonry.initByOffset( element, isotope );
							}, 500 );
						}
					}
				});
			window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"6689db31","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"abc@gmail.com","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Form Submission","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Please fill up the above captcha.","confirmationUrl":""}, '.uagb-block-6689db31', 1002 );
});
 });