<?php
    $conn = new mysqli('localhost', 'root', '42100124', 'gdlwebcam');
    if ($conn->connect_error){
        echo $error -> $conn->connect_error;
    }
?> 

