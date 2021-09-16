<?php


    $dsn = "mysql:dbname=Trial1;host=160.16.200.62;port=3306";
    $user = "Trial1";
    $psw = "ed8dT24F:KJ/6B0y";
    $dbh = new PDO($dsn,$user,$psw
        // array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        // PDO::ATTR_EMULATE_PREPARES => false)
        );


    function select() {
        global $dbh; //グローバル変数を関数内で使う場合は一度グローバルであると宣言しなければならない
        $selectSql = 'SELECT * FROM m_addr';
        $selectStmt = $dbh -> prepare($selectSql);
        $selectStmt -> execute();
        $result = $selectStmt -> fetch();

        var_dump($result);
    }

    function sum($a,$b){
        echo $a + $b;
    }

    function sub($a,$b){
        echo $a -$b;
    }

    // function login(){
    //     $hogehoge = $_GET['ID'];
        
    // }
?>