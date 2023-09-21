<div class="post">
  <h2 class="post-title">
    <a href=<?php echo get_permalink();?>>
    <?php
        echo get_the_title();
    ?>
    </a>
  </h2>
  <?php get_template_part('template-parts/post-header');?>
  <p>
  <?php echo get_the_excerpt();?>
  </p>
</div>