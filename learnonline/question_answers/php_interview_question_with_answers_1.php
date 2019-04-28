<?php include('../header.php'); ?>

<!-- Main -->
<div id="main">
    <div class="container">
        <div class="row main-row">
            <?php //This is left section ?>
            <div class="col-3 col-12-medium">
                <section>
                    <h2>Question with answers</h2>
                    <?php include('side_menu_questions.php'); ?>
                </section>
            </div>

            <?php //This is Middle section ?>
            <div class="col-6 col-12-medium imp-medium">
                <section class="middle-content">
                    <h2>PHP Interview question with answers</h2>
                    <?php include('php_1.php');
                    ?>
                </section>
            </div>
            <?php //This is Right section ?>
            <div class="col-3 col-12-medium">
            </div>
        </div>
    </div>
</div>

<?php include('../footer.php'); ?>