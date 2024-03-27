			<?php
				// If Single or Archive (Category, Tag, Author or a Date based page).
				if ( is_single() || is_archive() ) :
			?>
					</div><!-- /.col -->

					<?php
						get_sidebar();
					?>

				</div><!-- /.row -->
			<?php
				endif;
			?>
		</main><!-- /#main -->
		<footer id="footer" class="bg-black">
			<div class="container">


				<div class="row footer-top">

						<div class="col-md-2">
						<?php dynamic_sidebar( 'footer-top-1' );	?>
						</div>

						<div class="col-md-3">
						<?php dynamic_sidebar( 'footer-top-2' );	?>
						</div>

						<div class="col-md-5">
						<?php dynamic_sidebar( 'footer-top-3' );	?>
						</div>

						<div class="col-md-2">
						<?php dynamic_sidebar( 'footer-top-4' );	?>
						</div>

				</div><!-- /.row  footer top -->


				<div class="row footer-bottom">

					<div class="col-md-6">
						<?php dynamic_sidebar( 'footer-bottom-1' );	?>
					</div>

					<div class="col-md-6">
						<?php dynamic_sidebar( 'footer-bottom-2' );	?>
					</div>

			</div><!-- /.row  footer bottom -->

			</div><!-- /.container -->
		</footer><!-- /#footer -->
	</div><!-- /#wrapper -->
	<?php
		wp_footer();
	?>
</body>
</html>
