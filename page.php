<?php
/**
 * Template Name: Page (Default)
 * Description: Page template with Sidebar on the left side.
 *
 */

get_header();

the_post();
?>
<div class="row">
	<div class="col-md-12 col-sm-12">
		<div id="post-<?php the_ID(); ?>" <?php post_class( 'content' ); ?>>
			<?php the_content();	?>
		</div><!-- /#post-<?php the_ID(); ?> -->
	
	</div><!-- /.col -->
</div><!-- /.row -->
<?php
get_footer();
