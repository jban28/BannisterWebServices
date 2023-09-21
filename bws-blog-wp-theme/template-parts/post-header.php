  <h3 class="post-date">
    <i class="fa-regular fa-calendar"></i> 
      <?php 
      echo get_the_date();
      ?>
  </h3>

  <?php
      $postcats = get_the_category();
      if ($postcats) { 
  ?>
  <h4 class="post-cats">
  <?php
        $firstcat = true;
        foreach($postcats as $cat) {
          if (!$firstcat) {
            echo '&nbsp';
          }
          else {$firstcat = false;}
  ?>
    <a href=<?php echo get_category_link($cat->term_id);?>><span class="category"><?php echo $cat->name;?></span></a>
  <?php
          }
  ?>
  </h4>
  <?php 
      } 
  ?>

  <?php
      $posttags = get_the_tags();
      if ($posttags) { 
  ?>
  <h5 class="post-tags">
    <i class="fa-solid fa-tag"></i>
  <?php
        $firsttag = true;
        foreach($posttags as $tag) {
          if (!$firsttag) {
            echo ', ';
          }
          else {$firsttag = false;}
          ?>
    <a href=<?php echo get_tag_link($tag->term_id);?>><?php echo $tag->name;?></a>
          <?php
          }
  ?>
  </h5>
  <?php 
      }
  ?>