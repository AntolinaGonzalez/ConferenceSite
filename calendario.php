<?php include_once 'includes/templates/header.php'; ?>



<section class="seccion contenedor">
    <h2>Calendario de eventos</h2>

    <?php
        try{
            require_once('includes/functions/bd_conecion.php');
            $sql=" SELECT id_evento, nombre_evento, fecha_evento, hora_evento, cat_evento, icono, nombre_invitado, ap_invitado ";
            $sql .=" FROM eventos ";
            $sql .=" INNER JOIN categoria-eventos ";
            $sql .=" ON eventos.id_catevento=categoria-eventos.id_categoria ";
            $sql .=" INNER JOIN invitados ";
            $sql .=" ON eventos.id_even_invitados=invitados.id_invitado ";
            $sql .=" ORDER BY id_evento ";
            $resultado= $conn->query($sql);
        } catch(\Exception $e) {
            echo $e->getMessage();
        }
    ?>
    <div class="calendario">
        <?php
            $calendario =array();
            while ( $eventos= $resultado->fetch_assoc() ) { 
               
               
                $fecha= $eventos['fecha_evento'];
                $evento = array(
                    'titulo'=> $eventos['nombre_evento'],
                    'fecha' => $eventos['fecha_evento'],
                    'hora' => $eventos['hora_evento'],
                    'categoria' => $eventos['cat_evento'],
                    'icono' => 'fa' . " ". $eventos['icono'],
                    'invitado' => $eventos['nombre_invitado']." ". $eventos['ap_invitado']
                );
                $calendario[$fecha][] = $evento;
                ?>
                
            <?php  } ?>
            
            <pre>
               <?php var_dump($POST); ?>
            </pre>
    </div>

        <?php
            $conn->close();

        ?>

</section>

 
<?php include_once 'includes/templates/footer.php'; ?>
