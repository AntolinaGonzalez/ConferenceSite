<?php include_once 'includes/templates/header.php'; ?>



<section class="seccion contenedor">
    

    <?php
        try{
            require_once('includes/functions/bd_conecion.php');
            $sql= "SELECT * FROM `invitados`";
            $resultado= $conn->query($sql);
        } catch(Exception $e) {
            echo $e->getMessage();
        }
    ?>
    <div class="calendario">
    <section class="invitado contenedor seccion">
  <h2>Nuestros Invitados</h2>
  <ul class="lista-invitados clearfix">
        <?php
            while ( $invitados= $resultado->fetch_assoc() ) { ?>
   
                <li>
                    <div class="invitado">
                          <img src="img/<?php echo $invitados['url-imagen']?>"alt="invitado">
                         
                          <p> <?php echo $invitados['nombre_invitado']. " ". $invitados['ap_invitado'] ?></p>
                     </div>
                 </li>


        <?php } ?>
        </ul>
</section>  

        <?php
            $conn->close();

        ?>
 </div>
</section>


<?php include_once 'includes/templates/footer.php'; ?>
