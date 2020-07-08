<?php if(isset($_POST['submit'])):
        $nombre = $_POST['nombre'];    
        $apellido = $_POST['apellido'];
        $email = $_POST['email'];
        $regalo = $_POST['regalo'];
        $total = $_POST['total_pedido'];
        $fecha = date('Y-n-d H:i:s');


        //pedidos --json
        $boletos = $_POST['boletos'];
        $camisas = $_POST['camisas_evento'];
        $etiquetas = $_POST['pedidos_etiquetas'];
        include_once 'includes/functions/funciones.php';
        $pedido = productos_json($boletos, $camisas, $etiquetas);
        //EVENTOS

        $eventos = $_POST['registro'];

        $registro = eventos_json($eventos);


        //esto deberiainyectar a la base de datos pero no estaria andando ejej
        try{
            require_once('includes/functions/bd_conecion.php');
            $stmt = $conn->prepare( " INSERT INTO otrosregistrados (nombre_registrado, apellido_registrado, email_registrado, total_pedido, pases_articulos, talleres_registrados, fecha_registro) VALUES (?,?,?,?,?,?,?)");
            $stmt->bind_param("sssssss", $nombre, $apellido, $email, $total, $pedido, $registro, $fecha);
            $stmt->execute();
            $stmt->close();
            $conn->close();
            header('Location: validar_registro.php?exitoso=1');
        } catch(Throwable $t) {
            echo $t->getMessage();
        }
        
    ?>

    <?php endif; ?>
<?php include_once 'includes/templates/header.php'; ?>
<section class="seccion contenedor">
        <h2>Resumen de registros</h2>

        <?php if(isset($_GET['exitoso'])): 
                if($_GET['exitoso'] == "1"):
                echo "Registro exitoso";
                 endif;
        endif; ?>

</section>

<?php include_once 'includes/templates/footer.php'; ?>
