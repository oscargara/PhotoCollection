<?php

$target_path =  "./photos/";
$allReturns = array();

for($i=0; $i<count($_FILES['photo-files']['name']); $i++){
    $ext = explode('.', basename( $_FILES['photo-files']['name'][$i]));
    $id = md5(uniqid());
    $target_filename = $target_path . $id . "." . $ext[count($ext)-1];

    $return = array('error'=>false);
    if(move_uploaded_file($_FILES['photo-files']['tmp_name'][$i], $target_filename)) {
        $return['url'] = './' . $target_filename;
        $return['id'] = $id;
    } else{
        $return['error'] = true;
    }
    $allReturns[] = $return;
}
header('Content-Type: application/json');
echo json_encode($allReturns);

