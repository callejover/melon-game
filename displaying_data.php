<?php
//get the content of entered route
$json = file_get_contents('http://localhost:8012/api/leaderboard');
//convert the request into an PHP-object
$arr = json_decode($json);
?>
<!DOCTYPE html>
<html>
<head>
	<title>QuizWalk</title>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<link href="../css/leader-board.css" rel="stylesheet" type="text/css">
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
	</script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">
	</script>
</head>
<body id="background">
	<h1 class="text-center">Poängtavla</h1>
	<div class="container">
		<div class="row">
			<div class="col-sm-offset-1 col-lg-10">
				<div class="col-lg-12">
					<div class="row faux-table-header">
						<div class="col-xs-4">
							<label for="row-1">nr</label>
						</div>
						<div class="col-xs-4">
							<label for="row-2">Lag</label>
						</div>
						<div class="col-xs-4">
							<label for="row-3">Poäng</label>
						</div>
					</div>
				</div><?php 
				    $no     = 1;
				    $total  = 0;
				    foreach($arr->data as $row) {
				        echo '
				    <div class="col-lg-12 faux-table">
				    <div class="row">
				    <div class="col-xs-4">
				      <p class="item"> '.$no.' </p>
				    </div>
				    <div class="col-xs-4">
				      <p class="item">'.$row->name.'</p>
				    </div>
				    <div class="col-xs-4">
				      <p class="item">'.$row->points.'</p>
				    </div>
				            ';
				        $no++;
				}?>
			</div>
			<footer>
				<div class="go-back">
					<button id="go-back-button" onclick="goBack()">LOGGA UT</button>
				</div>
			</footer>
			<script src="../javascript/script.js">
			</script> 
		</div>
	</div>
</body>
</html>