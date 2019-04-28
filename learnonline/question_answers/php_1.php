<?php 
$url =  explode('/', $_SERVER['REQUEST_URI']);
$question_answer = array(
    'php_interview_question_with_answers.php' => array(
        array(
            'page_perv' =>'',
            'question_start' => 1,
            'page_next' => 'php_interview_question_with_answers_1.php', 
        ),
        array(
            'ques' => 'What is the difference between $message and $$message?',
            'ans' => htmlentities('They are both variables. But $message is a variable with a fixed name. $$message is a variable who is name is stored in $message. For example, if $message contains "var", $$message is the same as $var.')
        ),
        array(
            'ques' => 'What are the differences between require and include, include_once?',
            'ans' => htmlentities("File will not be included more than once. If we want to include a file once only and further calling of the file will be ignored then we have to use the PHP function include_once().")
        ),
        array(
            'ques' => 'What is meant by nl2br()?',
            'ans' => htmlentities('nl2br -- Inserts HTML line breaks before all newlines in a string nl2br (string); Returns string with "<br />" inserted before all newlines. For example: echo nl2br("god bless\n you") will output "god bless \n you" to your browser.')
        ),
        array(
            'ques' => 'What are the different types of errors in php?',
            'ans' => "Three are three types of errors:<br/>
            1. Notices: These are trivial, non-critical errors that PHP encounters while executing a script - for example, accessing a variable that has not yet been defined. By default, such errors are not displayed to the user at all - although, as you will see, you can change this default behaviour.<br>
            2. Warnings: These are more serious errors - for example, attempting to include() a file which does not exist. By default, these errors are displayed to the user, but they do not result in script termination.<br/>
            3. Fatal errors: These are critical errors - for example, instantiating an object of a non-existent class, or calling a non-existent function. These errors cause the immediate termination of the script, and PHP's default behaviour is to display them to the user when they take place."
        ),
        array(
            'ques' => 'What is the difference between the functions unlink and unset?',
            'ans' => 'unlink() deletes the given file from the file system.<br>
            unset() makes a variable undefined.'
        ),
        array(
            'ques' => 'What is the maximum size of a file that can be uploaded using php and how can we change this?',
            'ans' => 'You can change maximum size of a file set upload_max_filesize variable in php.ini file 2M'
        ),
        array(
            'ques' => 'How can we increase the execution time of a php script?',
            'ans' => 'Set max_execution_time variable in php.ini file to your desired time in second. Default 60 second.'
        ),
        array(
            'ques' => 'How can we destroy the session, how can we unset the variable of a session?',
            'ans' => 'session_unregister() unregisters a global variable from the current session.<br>
            session_unset() frees all session variables.'
        ),
        array(
            'ques' => 'How can we destroy the cookie?',
            'ans' => 'Set the cookie in past.'
        ),
        array(
            'ques' => 'What type of inheritance that php supports?',
            'ans' => 'In PHP an extended class is always dependent on a single base class, that is, multiple inheritance is not supported.'
        )
    ),
    'php_interview_question_with_answers_1.php' => array(
        array(
            'page_perv' =>'php_interview_question_with_answers.php',
            'question_start' => 11,
            'page_next' => 'php_interview_question_with_answers_2.php', 
        ),
        array(
            'ques' => 'What is the difference between $message and $$message?',
            'ans' => htmlentities('They are both variables. But $message is a variable with a fixed name. $$message is a variable who is name is stored in $message. For example, if $message contains "var", $$message is the same as $var.')
        )
    ),
    'php_interview_question_with_answers_2.php' => array(
        array(
            'page_perv' =>'php_interview_question_with_answers_1.php',
            'question_start' => 11,
            'page_next' => '', 
        ),
        array(
            'ques' => 'What is the difference between $message and $$message?',
            'ans' => htmlentities('They are both variables. But $message is a variable with a fixed name. $$message is a variable who is name is stored in $message. For example, if $message contains "var", $$message is the same as $var.')
        )
    )
    
);


if(isset($question_answer[$url[2]])){
    echo '<div class="question_answer_block width-100per">
    <div class="margin-5 float-left width-100per">';
        if($question_answer[$url[2]][0]['page_perv'] != ''){
            echo '<a href="'.$question_answer[$url[2]][0]['page_perv'].'" class="button float-left">Previous</a>';
        }
        if($question_answer[$url[2]][0]['page_next'] != ''){
            echo '<a href="'.$question_answer[$url[2]][0]['page_next'].'" class="button float-right">Next</a>';
        }
    echo '</div>
    <div class="question_answer_div width-100per">';
    $i=$question_answer[$url[2]][0]['question_start'];
    $j=0;
    foreach($question_answer[$url[2]] as $quesAns){
        if($j >= 1){
            echo '<div class="question_div">';
            echo $i .". ". $quesAns['ques'];
            echo '</div><div class="answer_div">';
            echo $quesAns['ans'];
            echo '</div><hr class="hr_line">';
            $i++;
        }
        $j++;
    }
    echo '</div>
    <div class="margin-5 float-left width-100per">';
        if($question_answer[$url[2]][0]['page_perv'] != ''){
            echo '<a href="'.$question_answer[$url[2]][0]['page_perv'].'" class="button float-left">Previous</a>';
        }
        if($question_answer[$url[2]][0]['page_next'] != ''){
            echo '<a href="'.$question_answer[$url[2]][0]['page_next'].'" class="button float-right">Next</a>';
        }
    echo '</div>
    </div>';
}
?>