<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><?=$recette->titre?></h5>
    <p class="card-text"><?=$recette->description?></p>
    <a href="index.php?id=<?php echo $recette->id ?>" class="btn btn-primary">Détails</a>
  </div>
</div>