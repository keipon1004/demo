<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="login.css">
    <script src="login.js"></script>
</head>
<body>
    <h2 id="err" style="color: red;"></h2>
    <h2 id="pass"></h2>

    <!-- 入力されたパスワード表示欄 -->
    <div class="pass5">
        <?php for ($i=1; $i <= 5 ; $i++) { ?>
            <span id='num<?php echo $i ?>' class="pass">*</span>
        <?php } ?>
    </div>
    
    <!-- 電卓数字表示＆一文字削除、OKボタン -->
    <div class="nyuryoku">
        <!-- 数字部分 -->
        <div class="nyuryokuNum">
            <?php for ($i=9; $i >= 0; $i--) { ?>
                <span class="btn1">
                <bdo dir="rtl"><button class="btn" onclick="pass(event)" id=<?php echo $i; ?>><?php echo $i ?></button></bdo>
                </span>
                <?php if ($i == 7) { ?>
                    <br>
                <?php } ?>
                <?php if ($i == 4) { ?>
                    <br>
                <?php } ?>
                <?php if ($i == 1) { ?>
                <br>
                <?php } ?>
            <?php } ?>
        </div>

        <!-- 一文字削除とOKボタン -->
        <div class="delSend">
            <button onclick="del(event)" class="btnD" >一文字戻る</button><br>
            <button onclick="login(event)" class="btnD" >OK</button><br>
        </div>
    </div>
    <br>

</body>
</html>